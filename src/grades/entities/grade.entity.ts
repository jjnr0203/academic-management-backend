import { Enrollment } from 'src/enrollments/entities/enrollment.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Grade {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Enrollment, { eager: true })
  matricula!: Enrollment;

  @Column('decimal', { precision: 5, scale: 2 })
  nota!: number;
}
