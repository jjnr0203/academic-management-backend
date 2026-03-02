import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { Enrollment } from './entities/enrollment.entity';

@Controller('enrollments')
export class EnrollmentsController {
  constructor(private readonly enrollmentsService: EnrollmentsService) {}

  @Get()
  findAll() {
    return this.enrollmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.enrollmentsService.findOne(id);
  }

  @Post()
  create(@Body() enrollment: Enrollment) {
    return this.enrollmentsService.create(enrollment);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() enrollment: Partial<Enrollment>) {
    return this.enrollmentsService.update(id, enrollment);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.enrollmentsService.remove(id);
  }
}
