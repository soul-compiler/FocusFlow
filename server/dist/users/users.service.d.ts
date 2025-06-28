import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    private saltRounds;
    create(createUserDTO: CreateUserDTO): Promise<import("mongoose").Document<unknown, {}, User, {}> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
