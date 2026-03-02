import { Course } from 'src/courses/entities/course.entity';
import { Student } from 'src/students/entities/student.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Student, { eager: true })
  estudiante!: Student;

  @ManyToOne(() => Course, { eager: true })
  curso!: Course;

  @Column({ type: 'date' })
  fecha!: Date;
}
