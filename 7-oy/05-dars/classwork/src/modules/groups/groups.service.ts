import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { PrismaService } from '../../core/database/prisma.service';
import { Status } from '@prisma/client';

@Injectable()
export class GroupsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const groups = await this.prisma.group.findMany({
      where: { status: Status.ACTIVE }
    });

    return {
      success: true,
      data: groups
    };
  }

  async create(createGroupDto: CreateGroupDto) {
    const exists = await this.prisma.group.findUnique({
      where: { name: createGroupDto.name }
    });

    if (exists) {
      throw new ConflictException('Group already exists with this name');
    }

    await this.prisma.group.create({ data: createGroupDto });

    return {
      success: true,
      message: 'Group created successfully'
    };
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
    await this.prisma.group.update({
      where: { id },
      data: { status: Status.INACTIVE }
    });

    return {
      success: true,
      message: 'Group deleted successfully'
    };
  }
}
