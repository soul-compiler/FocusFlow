import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async logIn(@Body() body: LoginDTO) {
    return await this.authService.logIn(body);
  }

  @Post('/verifyJWT')
  async verifyJWT(@Body() body: { jwt: string }) {
    return await this.authService.verifyJWT(body.jwt);
  }
}
