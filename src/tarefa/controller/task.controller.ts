import { Controller, Get, Post, Body, Patch, Param, NotFoundException } from '@nestjs/common';
import { Task } from '../task.entity';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskService } from '../service/task.service';
import { UpdateTaskDto } from '../dto/update-task-dto';

@Controller('api/task')
export class TaskController {
  constructor(private readonly _taskService: TaskService) {}

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<any> {
    // NAO ESQUECER DE POR AS VALIDACOES
    return this._taskService.createTask(createTaskDto);
  }

  @Get()
  findAll(): Promise<Task[]> {
    return this._taskService.listTasks();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string): Promise<Task> {
  //   return this._taskService.findOneTask(+id);
  // }

  @Patch(':id')
  async editTask(
    @Param('id') id: number,
    @Body() editTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    return await this._taskService.updateTask(id, editTaskDto);
  }
}
