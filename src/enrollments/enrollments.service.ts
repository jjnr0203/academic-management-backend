import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enrollment } from './entities/enrollment.entity';

@Injectable()
export class EnrollmentsService {
  constructor(
    @InjectRepository(Enrollment)
    private enrollmentsRepo: Repository<Enrollment>,
  ) {}

  findAll() {
    return this.enrollmentsRepo.find();
  }

  findOne(id: number) {
    return this.enrollmentsRepo.findOneBy({ id });
  }

  create(enrollment: Enrollment) {
    return this.enrollmentsRepo.save(enrollment);
  }

  update(id: number, enrollment: Partial<Enrollment>) {
    return this.enrollmentsRepo.update(id, enrollment);
  }

  remove(id: number) {
    return this.enrollmentsRepo.delete(id);
  }
}
