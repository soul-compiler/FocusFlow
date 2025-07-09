import type { User } from "./user";

export type Task = {
  _id: string;
  user: User;
  title: string;
  description: string;
  priority: number;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type ModifyTask = {
  title?: string;
  description?: string;
  priority?: number;
  done?: boolean;
};
