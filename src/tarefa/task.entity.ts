import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('task')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'date' })
  deadline: string;

  @Column({ type: 'int', unique: true, nullable: true })
  displayOrder?: number;
}
