import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

export type TaskDocument = HydratedDocument<Task>;

enum PriorityEnum {
  'Low' = 1,
  'Medium' = 2,
  'High' = 3,
}

@Schema()
export class Task {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, enum: Object.values(PriorityEnum) })
  priority: number;

  @Prop({ default: false })
  done: boolean;

  @Prop({ default: Date.now() })
  createdAt: Date;

  @Prop({ default: Date.now() })
  updatedAt: Date;

  @Prop()
  finishedAt: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
