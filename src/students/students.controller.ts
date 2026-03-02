import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './entities/student.entity';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.studentsService.findOne(id);
  }

  @Post()
  create(@Body() student: Student) {
    return this.studentsService.create(student);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() student: Partial<Student>) {
    return this.studentsService.update(id, student);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.studentsService.remove(id);
  }
}
