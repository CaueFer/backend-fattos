import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  NotFoundException,
  Delete,
  Options,
  Req,
  Res,
} from '@nestjs/common';
import { Task } from '../task.entity';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskService } from '../service/task.service';
import { UpdateTaskDto } from '../dto/update-task-dto';
import { UpdateTaskDisplayOrder } from '../dto/update-task-displayOrder';
import { Response } from 'express';

@Controller('api/task')
export class TaskController {
  constructor(private readonly _taskService: TaskService) {}

  @Options()
  options(@Res() response: Response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader(
      'Access-Control-Allow-Methods',
      'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    );
    response.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, Origin, Accept',
    );

    response.sendStatus(204);
  }

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<any> {
    return this._taskService.createTask(createTaskDto);
  }

  @Get()
  findAll(): Promise<Task[]> {
    return this._taskService.listTasks();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Task> {
    return this._taskService.findOneTask(+id);
  }

  @Patch(':id')
  async editTask(
    @Param('id') id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    return await this._taskService.updateTask(id, updateTaskDto);
  }

  @Post('updateDisplayOrder')
  async updateTasksDisplayOrder(
    @Body() updateTasksDisplayOrder: UpdateTaskDisplayOrder[],
  ) {
    return this._taskService.updateTasksDisplayOrder(updateTasksDisplayOrder);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number): Promise<{ message: string }> {
    return await this._taskService.deleteTask(id);
  }
}
