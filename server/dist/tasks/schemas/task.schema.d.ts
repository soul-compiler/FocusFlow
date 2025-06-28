import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
export type TaskDocument = HydratedDocument<Task>;
export declare class Task {
    user: User;
    title: string;
    description: string;
    priority: number;
    done: boolean;
    createdAt: Date;
    updatedAt: Date;
    finishedAt: Date;
}
export declare const TaskSchema: mongoose.Schema<Task, mongoose.Model<Task, any, any, any, mongoose.Document<unknown, any, Task, any> & Task & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Task, mongoose.Document<unknown, {}, mongoose.FlatRecord<Task>, {}> & mongoose.FlatRecord<Task> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
