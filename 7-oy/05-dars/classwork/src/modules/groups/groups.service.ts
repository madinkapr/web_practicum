import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class GroupsService {
  constructor(private prisma: PrismaService) {}

  async create(createGroupDto: CreateGroupDto) {
    return this.prisma.group.create({ data: createGroupDto });
  }

  async findAll() {
    return this.prisma.group.findMany();
  }

  async findOne(id: number) {
    const group = await this.prisma.group.findUnique({ where: { id } });
    if (!group) throw new NotFoundException(`Group with id ${id} not found`);
    return group;
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    await this.findOne(id);
    return this.prisma.group.update({ where: { id }, data: updateGroupDto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.group.delete({ where: { id } });
  }
}
