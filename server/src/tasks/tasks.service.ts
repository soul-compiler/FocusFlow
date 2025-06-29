import { Body, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Task } from './schemas/task.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTaskDTO } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<Task>,
  ) {}

  async create(createTaskDTO: CreateTaskDTO, userId: string) {
    const createdTask = new this.taskModel({ user: userId, ...createTaskDTO });
    return createdTask.save();
  }
}
