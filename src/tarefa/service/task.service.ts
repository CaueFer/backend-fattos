import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../task.entity';
import { CreateTaskDto } from '../dto/create-task.dto';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>,
    ) {}

    async createTask(taskData: CreateTaskDto): Promise<Task> {
        return this.taskRepository.save(taskData);
    }

    async listTasks(): Promise<Task[]> {
        return this.taskRepository.find();
    }
}
