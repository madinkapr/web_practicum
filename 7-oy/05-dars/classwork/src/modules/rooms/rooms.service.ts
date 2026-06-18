import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class RoomsService {
  constructor(private prisma: PrismaService) {}

  async create(createRoomDto: CreateRoomDto) {
    return this.prisma.room.create({ data: createRoomDto });
  }

  async findAll() {
    return this.prisma.room.findMany();
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
    return this.prisma.room.delete({ where: { id } });
  }
}
