import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../core/database/prisma.service';
import { Status } from '@prisma/client';
import * as argon from 'argon2';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const users = await this.prisma.user.findMany({
      where: { status: Status.ACTIVE }
    });

    return {
      success: true,
      data: users
    };
  }

  async create(createUserDto: CreateUserDto) {
    const exists = await this.prisma.user.findFirst({
      where: {
        OR: [{ email: createUserDto.email }, { contact: createUserDto.contact }]
      }
    });

    if (exists) {
      throw new ConflictException('User already exists with this email or contact');
    }

    const hash = await argon.hash(createUserDto.password);
    await this.prisma.user.create({
      data: {
        fullname: createUserDto.fullname,
        email: createUserDto.email,
        contact: createUserDto.contact,
        address: createUserDto.address,
        password: hash,
        photo: 'null'
      }
    });

    return {
      success: true,
      message: 'User created successfully'
    };
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.findOne(id);
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.user.update({
      where: { id },
      data: { status: Status.INACTIVE }
    });

    return {
      success: true,
      message: 'User deleted successfully'
    };
  }
}
