import { PriorityEnum } from '../types/task-enums';

export class ModifyTaskDTO {
  title?: string;
  description?: string;
  priority?: PriorityEnum;
  done?: boolean;
}
