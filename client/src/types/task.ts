import type { User } from "./user";

export type Task = {
  id: string;
  user: User;
  title: string;
  priority: number;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
};
