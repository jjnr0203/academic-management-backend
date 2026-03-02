import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course } from './entities/course.entity';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coursesService.findOne(id);
  }

  @Post()
  create(@Body() course: Course) {
    return this.coursesService.create(course);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() course: Partial<Course>) {
    return this.coursesService.update(id, course);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.coursesService.remove(id);
  }
}
