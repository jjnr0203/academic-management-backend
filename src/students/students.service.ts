import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentsRepo: Repository<Student>,
  ) {}

  findAll() {
    return this.studentsRepo.find();
  }

  findOne(id: number) {
    return this.studentsRepo.findOneBy({ id });
  }

  create(student: Student) {
    return this.studentsRepo.save(student);
  }

  update(id: number, student: Partial<Student>) {
    return this.studentsRepo.update(id, student);
  }

  remove(id: number) {
    return this.studentsRepo.delete(id);
  }
}
