import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarefa } from '../dto/tarefa.entity';

@Injectable()
export class TarefaService {
    constructor(
        @InjectRepository(Tarefa)
        private tarefasRepository: Repository<Tarefa>,
    ) {}

    async criarTarefa(tarefa: Partial<Tarefa>): Promise<Tarefa> {
        return this.tarefasRepository.save(tarefa);
    }

    async listarTarefas(): Promise<Tarefa[]> {
        return this.tarefasRepository.find();
    }
}