import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { Task } from './schemas/task.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTaskDTO } from './dto/create-task.dto';
import { ModifyTaskDTO } from './dto/modify-task.dto';
import { requestType } from 'src/types/request-type';
import { UserDocument } from 'src/users/schemas/user.schema';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<Task>,
  ) {}

  // Create a task
  async create(createTaskDTO: CreateTaskDTO, userId: string) {
    const createdTask = new this.taskModel({ user: userId, ...createTaskDTO });
    return createdTask.save();
  }

  // Get all task by user
  async getAllByUser(userId: string): Promise<Task[] | undefined> {
    return await this.taskModel.find({ user: userId });
  }

  // Modify an specific task
  async modifyTask(
    modifyTaskDTO: ModifyTaskDTO,
    req: requestType,
    taskId: string,
  ) {
    const task = await this.getTaskById(taskId, req);
    task.set(modifyTaskDTO);
    return await task.save();
  }

  // Delete a task
  async deleteTask(taskId: string, req: requestType) {
    const task = await this.getTaskById(taskId, req);

    task
      .deleteOne()
      .then((result) => {
        if (result.deletedCount > 0) {
          return { message: `The task ${taskId}, was deleted sucessfully` };
        } else {
          throw new NotFoundException();
        }
      })
      .catch((error) => {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      });
  }

  // Fetch a task
  async getTaskById(taskId: string, req: requestType) {
    const task = await this.taskModel
      .findById(taskId)
      .populate<{ user: UserDocument }>('user');
    if (!task) {
      throw new NotFoundException(`No se encontro la task: ${taskId}`);
    }

    if (task.user._id.toString() !== req.user.sub) {
      throw new UnauthorizedException();
    }

    return task;
  }
}
