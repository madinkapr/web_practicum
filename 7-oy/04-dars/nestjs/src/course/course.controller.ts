import { Controller, Get, Post, Put, Patch, Delete, Param, Body, ParseIntPipe } from "@nestjs/common";
import { CourseService } from "./course.service";
import { CreateCourseDto } from "./course.dto";

@Controller('courses')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    @Get()
    findAll() {
        return this.courseService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.courseService.findOne(id);
    }

    @Post()
    create(@Body() createCourseDto: CreateCourseDto) {
        return this.courseService.create(createCourseDto);
    }

    @Put(':id')
    updateAll(@Param('id', ParseIntPipe) id: number, @Body() updateData: CreateCourseDto) {
        return this.courseService.updateAll(id, updateData);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<CreateCourseDto>) {
        return this.courseService.update(id, updateData);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.courseService.remove(id);
    }
}
