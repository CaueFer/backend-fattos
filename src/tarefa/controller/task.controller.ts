import { Controller, Get, Post, Body } from '@nestjs/common';
import { Task } from '../task.entity';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskService } from '../service/task.service';

@Controller('api/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto): Promise<any> {

    // NAO ESQUECER DE POR AS VALIDACOES
    return this.taskService.createTask(createTaskDto);
  }

  @Get()
  async list(): Promise<Task[]> {
    return this.taskService.listTasks();
  }
}