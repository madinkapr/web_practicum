import { Controller, Get, Post, Put, Patch, Delete, Param, ParseIntPipe, Body} from "@nestjs/common";
import { TeachersService } from "./teachers.service";
import { CreateTeacherDto } from "./teachers.dto";

@Controller('teachers')
export class TeachersController{
    constructor(private readonly teachersService: TeachersService){}

    @Get()
    findAll(){
        return this.teachersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.teachersService.findOne(id)
    }

    @Post()
    create(@Body() createTeacherDto: CreateTeacherDto){
        return this.teachersService.create(createTeacherDto)
    }

    @Put(':id')
    updateAll(@Param('id', ParseIntPipe) id: number, @Body() updateData: CreateTeacherDto){
        return this.teachersService.updateAll(id, updateData)
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id:number, @Body() updateData: Partial<CreateTeacherDto>){
        return this.teachersService.update(id, updateData)
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number){
        return this.teachersService.remove(id)
    }
}
