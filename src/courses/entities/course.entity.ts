import { Teacher } from 'src/teachers/entities/teacher.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  descripcion!: string;

  @ManyToOne(() => Teacher, { eager: true })
  docente!: Teacher;
}
