import { Controller, Get, Post, Put, Patch, Delete, Param, Body, ParseIntPipe } from "@nestjs/common";
import { GroupsService } from "./groups.service";
import { CreateGroupDto } from "./groups.dto";

@Controller('groups')
export class GroupsController {
    constructor(private readonly groupsService: GroupsService) {}

    @Get()
    findAll() {
        return this.groupsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.groupsService.findOne(id);
    }

    @Post()
    create(@Body() createGroupDto: CreateGroupDto) {
        return this.groupsService.create(createGroupDto);
    }

    @Put(':id')
    updateAll(@Param('id', ParseIntPipe) id: number, @Body() updateData: CreateGroupDto) {
        return this.groupsService.updateAll(id, updateData);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<CreateGroupDto>) {
        return this.groupsService.update(id, updateData);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.groupsService.remove(id);
    }
}
