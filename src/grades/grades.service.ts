import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grade } from './entities/grade.entity';

@Injectable()
export class GradesService {
  constructor(
    @InjectRepository(Grade)
    private gradesRepo: Repository<Grade>,
  ) {}

  findAll() {
    return this.gradesRepo.find();
  }

  findOne(id: number) {
    return this.gradesRepo.findOneBy({ id });
  }

  create(grade: Grade) {
    return this.gradesRepo.save(grade);
  }

  update(id: number, grade: Partial<Grade>) {
    return this.gradesRepo.update(id, grade);
  }

  remove(id: number) {
    return this.gradesRepo.delete(id);
  }
}
