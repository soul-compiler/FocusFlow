import { PriorityEnum } from '../types/task-enums';

export class CreateTaskDTO {
  title: string;
  description: string;
  priority: PriorityEnum;
}
