import { Controller, Get, Post, Body } from '@nestjs/common';
import { TarefaService } from '../service/tarefa.service';
import { Tarefa } from '../dto/tarefa.entity';

@Controller('tarefas')
export class TarefasController {
    constructor(private readonly _tarefasService: TarefaService) {}

    @Post()
    async criar(@Body() tarefa: Partial<Tarefa>): Promise<Tarefa> {
        return this._tarefasService.criarTarefa(tarefa);
    }

    @Get()
    async listar(): Promise<Tarefa[]> {
        return this._tarefasService.listarTarefas();
    }
}