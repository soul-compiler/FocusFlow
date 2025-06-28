import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';
// Importamos bcrypt
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  private saltRounds: number = 10;

  async create(createUserDTO: CreateUserDTO) {
    const passwordHash = await bcrypt.hash(
      createUserDTO.password,
      this.saltRounds,
    );
    const createdUser = new this.userModel({ ...createUserDTO, passwordHash });
    return await createdUser.save();
  }
}
