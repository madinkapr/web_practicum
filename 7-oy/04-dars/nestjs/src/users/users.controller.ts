import { Controller, Get, Post, Put, Patch, Delete, Param, Body, ParseIntPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./users.dto";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Put(':id')
    updateAll(@Param('id', ParseIntPipe) id: number, @Body() updateData: CreateUserDto) {
        return this.usersService.updateAll(id, updateData)
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id:number, @Body() updateData: Partial<CreateUserDto>){
        return this.usersService.update(id, updateData)
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number){
        return this.usersService.remove(id)
    }
}