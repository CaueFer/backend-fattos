import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarefa } from './dto/tarefa.entity';
import { TarefaService } from './service/tarefa.service';
import { TarefasController } from './controller/tarefa.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Tarefa])],
    providers: [TarefaService],
    controllers: [TarefasController],
})
export class TarefasModule {}