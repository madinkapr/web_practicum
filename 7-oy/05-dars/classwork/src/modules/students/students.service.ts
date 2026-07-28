import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from '../../core/database/prisma.service';
import { Status } from '@prisma/client';
import * as argon from 'argon2';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const students = await this.prisma.student.findMany({
      where: { status: Status.ACTIVE }
    });

    return {
      success: true,
      data: students
    };
  }

  async create(createStudentDto: CreateStudentDto) {
    const exists = await this.prisma.student.findFirst({
      where: {
        OR: [{ email: createStudentDto.email }, { contact: createStudentDto.contact }]
      }
    });

    if (exists) {
      throw new ConflictException('Student already exists with this email or contact');
    }

    const hash = await argon.hash(createStudentDto.password);
    await this.prisma.student.create({
      data: {
        fullname: createStudentDto.fullname,
        email: createStudentDto.email,
        contact: createStudentDto.contact,
        address: createStudentDto.address,
        password: hash,
        photo: 'null'
      }
    });

    return {
      success: true,
      message: 'Student created successfully'
    };
  }

  async findOne(id: number) {
    const student = await this.prisma.student.findUnique({ where: { id } });
    if (!student) throw new NotFoundException(`Student with id ${id} not found`);
    return student;
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    await this.findOne(id);
    return this.prisma.student.update({ where: { id }, data: updateStudentDto });
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.student.update({
      where: { id },
      data: { status: Status.INACTIVE }
    });

    return {
      success: true,
      message: 'Student deleted successfully'
    };
  }
}
