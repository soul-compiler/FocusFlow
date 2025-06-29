import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateTaskDTO } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { requestType } from 'src/types/request-type';
import { ModifyTaskDTO } from './dto/modify-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  // Create a task
  @UseGuards(AuthGuard)
  @Post('/create')
  async create(@Body() taskBody: CreateTaskDTO, @Request() req: requestType) {
    return await this.taskService.create(taskBody, req.user.sub);
  }

  // Get all tasks by user
  @UseGuards(AuthGuard)
  @Get('')
  async getTasksByUser(@Request() req: requestType) {
    const Tasks = await this.taskService.getAllByUser(req.user.sub);
    return Tasks;
  }

  // Get one task
  @UseGuards(AuthGuard)
  @Get('/:id')
  async getOneTask(@Param('id') taskId: string, @Request() req: requestType) {
    return await this.taskService.getTaskById(taskId, req);
  }

  // Modify a task
  @UseGuards(AuthGuard)
  @Put('/:id')
  async modifyTask(
    @Body() modifyTask: ModifyTaskDTO,
    @Request() req: requestType,
    @Param('id') taskId: string,
  ) {
    return this.taskService.modifyTask(modifyTask, req, taskId);
  }

  // Delete a task
  @UseGuards(AuthGuard)
  @Delete('/:id')
  async deleteTask(@Param('id') taskId: string, @Request() req: requestType) {
    return await this.taskService.deleteTask(taskId, req);
  }
}
