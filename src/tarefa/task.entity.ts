import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tarefas')
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('decimal')
    price: number;

    @Column({ type: 'date' })
    deadline: Date;

    @Column({ type: 'int', unique: true })
    displayOrder: number;
}