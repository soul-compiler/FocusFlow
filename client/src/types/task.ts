export type Task = {
  id: string;
  user: string;
  title: string;
  priority: number;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
};
