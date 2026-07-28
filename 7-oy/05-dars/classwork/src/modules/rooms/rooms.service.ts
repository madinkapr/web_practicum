import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { PrismaService } from '../../core/database/prisma.service';
import { Status } from '@prisma/client';

@Injectable()
export class RoomsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const rooms = await this.prisma.room.findMany({
      where: { status: Status.ACTIVE }
    });

    return {
      success: true,
      data: rooms
    };
  }

  async create(createRoomDto: CreateRoomDto) {
    const exists = await this.prisma.room.findUnique({
      where: { name: createRoomDto.name }
    });

    if (exists) {
      throw new ConflictException('Room already exists with this name');
    }

    await this.prisma.room.create({ data: createRoomDto });

    return {
      success: true,
      message: 'Room created successfully'
    };
  }

  async findOne(id: number) {
    const room = await this.prisma.room.findUnique({ where: { id } });
    if (!room) throw new NotFoundException(`Room with id ${id} not found`);
    return room;
  }

  async update(id: number, updateRoomDto: UpdateRoomDto) {
    await this.findOne(id);
    return this.prisma.room.update({ where: { id }, data: updateRoomDto });
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.room.update({
      where: { id },
      data: { status: Status.INACTIVE }
    });

    return {
      success: true,
      message: 'Room deleted successfully'
    };
  }
}
