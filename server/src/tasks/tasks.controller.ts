import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateTaskDTO } from './dto/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @UseGuards(AuthGuard)
  @Post('/create')
  async create(
    @Body() taskBody: CreateTaskDTO,
    @Request() req: Request & { user: { sub: string; email: string } },
  ) {
    return await this.taskService.create(taskBody, req.user.sub);
  }
}
