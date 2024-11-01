import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { Task } from '../task.entity';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskService } from '../service/task.service';
import { UpdateTaskDto } from '../dto/update-task-dto';
import { UpdateTaskDisplayOrder } from '../dto/update-task-displayOrder';

@Controller('api/task')
export class TaskController {
  constructor(private readonly _taskService: TaskService) {}

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
  async updateTasksDisplayOrder(@Body() updateTasksDisplayOrder: UpdateTaskDisplayOrder[]) {
    return this._taskService.updateTasksDisplayOrder(updateTasksDisplayOrder);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number): Promise<{ message: string }> {
    return await this._taskService.deleteTask(id);
  }
}
