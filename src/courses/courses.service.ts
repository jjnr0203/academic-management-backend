import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private coursesRepo: Repository<Course>,
  ) {}

  findAll() {
    return this.coursesRepo.find();
  }

  findOne(id: number) {
    return this.coursesRepo.findOneBy({ id });
  }

  create(course: Course) {
    return this.coursesRepo.save(course);
  }

  update(id: number, course: Partial<Course>) {
    return this.coursesRepo.update(id, course);
  }

  remove(id: number) {
    return this.coursesRepo.delete(id);
  }
}
