import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskService } from './service/task.service';
import { TaskController } from './controller/task.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Task])],
    providers: [TaskService],
    controllers: [TaskController],
})
export class TaskModule {}