import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { GradesService } from './grades.service';
import { Grade } from './entities/grade.entity';

@Controller('grades')
export class GradesController {
  constructor(private readonly gradesService: GradesService) {}

  @Get()
  findAll() {
    return this.gradesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.gradesService.findOne(id);
  }

  @Post()
  create(@Body() grade: Grade) {
    return this.gradesService.create(grade);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() grade: Partial<Grade>) {
    return this.gradesService.update(id, grade);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.gradesService.remove(id);
  }
}
