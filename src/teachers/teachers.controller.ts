import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get()
  findAll() {
    return this.teachersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.teachersService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateTeacherDto) {
    return this.teachersService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateTeacherDto) {
    return this.teachersService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.teachersService.remove(id);
  }
}
