import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from '../../core/database/prisma.service';
import { Status } from '@prisma/client';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const courses = await this.prisma.course.findMany({
      where: { status: Status.ACTIVE }
    });

    return {
      success: true,
      data: courses
    };
  }

  async create(createCourseDto: CreateCourseDto) {
    const exists = await this.prisma.course.findUnique({
      where: { name: createCourseDto.name }
    });

    if (exists) {
      throw new ConflictException('Course already exists with this name');
    }

    await this.prisma.course.create({ data: createCourseDto });

    return {
      success: true,
      message: 'Course created successfully'
    };
  }

  async findOne(id: number) {
    const course = await this.prisma.course.findUnique({ where: { id } });
    if (!course) throw new NotFoundException(`Course with id ${id} not found`);
    return course;
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    await this.findOne(id);
    return this.prisma.course.update({ where: { id }, data: updateCourseDto });
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.course.update({
      where: { id },
      data: { status: Status.INACTIVE }
    });

    return {
      success: true,
      message: 'Course deleted successfully'
    };
  }
}
