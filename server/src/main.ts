import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configure cors
  app.enableCors({
    origin: 'http://localhost:5173', // el puerto donde react
    credentials: true, // Si usamos auth
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
