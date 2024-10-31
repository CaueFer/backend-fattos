import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../task.entity';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task-dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly _taskRepository: Repository<Task>,
  ) {}

  async listTasks(): Promise<Task[]> {
    return this._taskRepository.find();
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const maxDisplayOrder = await this._taskRepository
      .createQueryBuilder('task')
      .select('MAX(task.displayOrder)', 'max')
      .getRawOne();

    const newTask = this._taskRepository.create({
      ...createTaskDto,
      displayOrder: (maxDisplayOrder.max || 0) + 1,
    });

    return this._taskRepository.save(newTask);
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this._taskRepository.findOneBy({ id });

    if (!task) {
      throw new NotFoundException('Task não encontrada, verifique o ID');
    }

    if (!updateTaskDto.name || updateTaskDto.name.trim() === '') {
      throw new BadRequestException('Novo nome inválido ou vazio!');
    }

    const existingTask = await this._taskRepository.findOneBy({
      name: updateTaskDto.name,
    });

    if (existingTask && existingTask.id !== task.id) {
      throw new BadRequestException('Novo nome em uso, use outro!');
  }

    task.name = updateTaskDto.name ? updateTaskDto.name : task.name;

    task.price =
      updateTaskDto.price !== undefined ? updateTaskDto.price : task.price;

    task.deadline = updateTaskDto.deadline
      ? updateTaskDto.deadline
      : task.deadline;

    return this._taskRepository.save({
      id: task.id,
      name: task.name,
      price: task.price,
      deadline: task.deadline,
      displayOrder: task.displayOrder,
    });
  }
}
