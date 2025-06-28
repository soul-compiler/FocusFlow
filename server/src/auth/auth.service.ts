import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from './dto/login.dto';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async logIn(body: LoginDTO) {
    const user = await this.userService.getOneByEmail(body.email);
    if (!user) {
      throw new UnauthorizedException();
    }
    const isMatch = await bcrypt.compare(body.password, user?.passwordHash);
    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user._id, email: user.email };
    const jwtToken = await this.jwtService.signAsync(payload);

    return { message: 'Login exitoso', jwtToken };
  }

  async verifyJWT(jwt: string): Promise<{ sub: string; email: string }> {
    try {
      const payload = await this.jwtService.verifyAsync<{
        sub: string;
        email: string;
      }>(jwt, {
        secret: jwtConstants.secret,
      });
      return payload;
    } catch {
      throw new UnauthorizedException();
    }
  }
}
