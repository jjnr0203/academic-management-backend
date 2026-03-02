import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from './entities/teacher.entity';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teacher)
    private teachersRepo: Repository<Teacher>,
  ) {}

  findAll() {
    return this.teachersRepo.find();
  }

  findOne(id: number) {
    return this.teachersRepo.findOneBy({ id });
  }

  create(dto: CreateTeacherDto) {
    const teacher = this.teachersRepo.create(dto);
    return this.teachersRepo.save(teacher);
  }

  update(id: number, dto: UpdateTeacherDto) {
    return this.teachersRepo.update(id, dto);
  }

  remove(id: number) {
    return this.teachersRepo.delete(id);
  }
}
