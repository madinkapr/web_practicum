import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PrismaService } from '../../core/database/prisma.service';
import { Status } from '@prisma/client';
import * as argon from 'argon2';

@Injectable()
export class TeachersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const teachers = await this.prisma.teacher.findMany({
      where: { status: Status.ACTIVE }
    });

    return {
      success: true,
      data: teachers
    };
  }

  async create(createTeacherDto: CreateTeacherDto) {
    const exists = await this.prisma.teacher.findFirst({
      where: {
        OR: [{ email: createTeacherDto.email }, { contact: createTeacherDto.contact }]
      }
    });

    if (exists) {
      throw new ConflictException('Teacher already exists with this email or contact');
    }

    const hash = await argon.hash(createTeacherDto.password);
    await this.prisma.teacher.create({
      data: {
        fullname: createTeacherDto.fullname,
        email: createTeacherDto.email,
        contact: createTeacherDto.contact,
        address: createTeacherDto.address,
        password: hash,
        photo: 'null'
      }
    });

    return {
      success: true,
      message: 'Teacher created successfully'
    };
  }

  async findOne(id: number) {
    const teacher = await this.prisma.teacher.findUnique({ where: { id } });
    if (!teacher) throw new NotFoundException(`Teacher with id ${id} not found`);
    return teacher;
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    await this.findOne(id);
    return this.prisma.teacher.update({ where: { id }, data: updateTeacherDto });
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.teacher.update({
      where: { id },
      data: { status: Status.INACTIVE }
    });

    return {
      success: true,
      message: 'Teacher deleted successfully'
    };
  }
}
