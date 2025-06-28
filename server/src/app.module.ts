import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    TasksModule,
    MongooseModule.forRoot('mongodb://localhost/focusflow'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
