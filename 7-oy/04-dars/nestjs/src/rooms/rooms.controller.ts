import { Controller, Get, Post, Put, Patch, Delete, Param, Body, ParseIntPipe } from "@nestjs/common";
import { RoomsService } from "./rooms.service";
import { CreateRoomDto } from "./rooms.dto";

@Controller('rooms')
export class RoomsController {
    constructor(private readonly roomsService: RoomsService) {}

    @Get()
    findAll() {
        return this.roomsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.roomsService.findOne(id);
    }

    @Post()
    create(@Body() createRoomDto: CreateRoomDto) {
        return this.roomsService.create(createRoomDto);
    }

    @Put(':id')
    updateAll(@Param('id', ParseIntPipe) id: number, @Body() updateData: CreateRoomDto) {
        return this.roomsService.updateAll(id, updateData);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<CreateRoomDto>) {
        return this.roomsService.update(id, updateData);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.roomsService.remove(id);
    }
}
