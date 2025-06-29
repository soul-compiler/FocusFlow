import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { Request } from 'express';

// Creamos la clase AuthGuard que implementa CanActivate, esto hace que nest corra este código antes de que la request
// llegue a un handler (ruta del controller)
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  // Esta es la función que se llama en el handler
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Convertimos la request desde el contexto de nestjs a una Request HTTP para poder trabajar con los headers
    // Esto lo debemos hacer porque nest no solamente trabaja con HTTP, el contexto siempre es enviado a los guards, interceptors, pipes...
    // Esto obtiene el objeto Request real que Express está manejando en esta request.
    const request: Request = context.switchToHttp().getRequest();
    // llamamos la función para obtener el token de la request
    const token = this.extractTokenFromHeader(request);

    // Si el token no esta
    if (!token) {
      throw new UnauthorizedException();
    }

    // verificar el token puede generar excepciones por lo que usamos un try
    try {
      // verificamos y obtenemos el payload
      const payload = await this.jwtService.verifyAsync<{
        sub: string;
        email: string;
      }>(token, {
        secret: jwtConstants.secret,
      });

      // Asigning our payload to the request so we can acess it from our routes.
      request['user'] = payload;
    } catch {
      // Enviamos una excepción 401 Unauthorized porque el token es inválido o expiró.
      throw new UnauthorizedException();
    }

    // retornamos true, para que el flujo continue en caso de que todo sea correcto.
    return true;
  }

  private extractTokenFromHeader(request: Request) {
    // Obtenemos el token y separamos el prefix Bearer del token
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    // Si el token es de tipo Bearer lo retornamos
    return type === 'Bearer' ? token : undefined;
  }
}
