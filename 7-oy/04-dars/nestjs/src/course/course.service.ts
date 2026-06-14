import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateCourseDto } from "./course.dto";

@Injectable()
export class CourseService {
    private courses: any[] = [
        { id: 1, name: "Web Development", duration: 6, price: 1890000, description: "Frontend va Backend", lectureCount: 72, practiceCount: 48 },
        { id: 2, name: "Python", duration: 5, price: 1500000, description: "Python dasturlash tili", lectureCount: 60, practiceCount: 40 },
        { id: 3, name: "Graphic Design", duration: 4, price: 1200000, description: "UI/UX va dizayn", lectureCount: 48, practiceCount: 32 },
        { id: 4, name: "Mobile Development", duration: 6, price: 1890000, description: "Flutter va React Native", lectureCount: 72, practiceCount: 48 },
        { id: 5, name: "Machine Learning", duration: 8, price: 2500000, description: "ML va AI asoslari", lectureCount: 96, practiceCount: 64 },
    ];

    findAll() {
        return this.courses;
    }

    findOne(id: number) {
        const course = this.courses.find(c => c.id === id);
        if (!course) throw new NotFoundException(`Course with id ${id} not found`);
        return course;
    }

    create(createCourseDto: CreateCourseDto) {
        const id = this.courses.length > 0 ? this.courses[this.courses.length - 1].id + 1 : 1;
        const course = { id, ...createCourseDto };
        this.courses.push(course);
        return { success: true, data: course };
    }

    updateAll(id: number, updateData: CreateCourseDto) {
        const index = this.courses.findIndex(c => c.id === id);
        if (index === -1) throw new NotFoundException(`Course with id ${id} not found`);
        this.courses[index] = { id, ...updateData };
        return this.courses[index];
    }

    update(id: number, updateData: Partial<CreateCourseDto>) {
        const index = this.courses.findIndex(c => c.id === id);
        if (index === -1) throw new NotFoundException(`Course with id ${id} not found`);
        this.courses[index] = { ...this.courses[index], ...updateData };
        return this.courses[index];
    }

    remove(id: number) {
        const index = this.courses.findIndex(c => c.id === id);
        if (index === -1) throw new NotFoundException(`Course with id ${id} not found`);
        this.courses = this.courses.filter(c => c.id !== id);
        return { success: true };
    }
}
