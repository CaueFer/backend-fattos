import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tarefa')
export class Tarefa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @Column({ type: 'date' })
    deadline: Date;

    @Column({ type: 'int', unique: true })
    displayOrder: number;
}