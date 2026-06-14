import { Controller, Get, Post, Put, Patch, Delete, Param, Body, ParseIntPipe } from "@nestjs/common";
import { StudentsService } from "./students.service"
import { CreateStudentDto } from "./students.dto";

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) { }

    @Get()
    findAll() {
        return this.studentsService.findAll();
    }

    @Get(":id")
    findOne(@Param("id", ParseIntPipe) id: number) {
        return this.studentsService.findOne(id)
    }

    @Post()
    create(@Body() createStudentDto: CreateStudentDto) {
        return this.studentsService.create(createStudentDto)
    }

    @Put(":id")
    updateAll(@Param('id', ParseIntPipe) id: number, @Body() updateData: CreateStudentDto){
        return this.studentsService.updateAll(id, updateData)
    }

    @Patch(":id")
    update(@Param('id', ParseIntPipe) id:number, @Body() updateData: CreateStudentDto){
        return this.studentsService.update(id, updateData)
    }

    @Delete(":id")
     remove(@Param('id', ParseIntPipe) id: number){
        return this.studentsService.remove(id)
    }

}