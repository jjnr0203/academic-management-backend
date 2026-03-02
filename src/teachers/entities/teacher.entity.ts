import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  nombre?: string;

  @Column()
  apellido?: string;

  @Column({ unique: true })
  email?: string;
}
