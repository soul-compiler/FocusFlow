import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateTaskDTO } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { requestType } from 'src/types/request-type';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @UseGuards(AuthGuard)
  @Post('/create')
  async create(@Body() taskBody: CreateTaskDTO, @Request() req: requestType) {
    return await this.taskService.create(taskBody, req.user.sub);
  }

  @UseGuards(AuthGuard)
  @Get('')
  async getTasksByUser(@Request() req: requestType) {
    const Tasks = await this.taskService.getAllByUser(req.user.sub);
    return Tasks;
  }
}
