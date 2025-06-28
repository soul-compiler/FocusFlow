import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
export declare class UsersController {
    private readonly userSerice;
    constructor(userSerice: UsersService);
    create(body: CreateUserDTO): Promise<import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User, {}> & import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
