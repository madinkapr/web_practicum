import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateStudentDto } from "./students.dto";

@Injectable()
export class StudentsService {
    private students: any[] = [
        { id: 1, firstName: "Madina", lastName: "Primova", phone: "+998931801444", gender: "Female", password: "123456", groupId: 1, courseId: 1, birthDate: "2003-05-14" },
        { id: 2, firstName: "Sardor", lastName: "Toshmatov", phone: "+998904445566", gender: "Male", password: "123456", groupId: 1, courseId: 2 },
        { id: 3, firstName: "Nilufar", lastName: "Rahimova", phone: "+998905556677", gender: "Female", password: "123456", groupId: 2, courseId: 1, birthDate: "2002-11-20" },
        { id: 4, firstName: "Jasur", lastName: "Mirzayev", phone: "+998906667788", gender: "Male", password: "123456", groupId: 2, courseId: 3 },
        { id: 5, firstName: "Zulfiya", lastName: "Karimova", phone: "+998907778899", gender: "Female", password: "123456", groupId: 3, courseId: 2, birthDate: "2001-07-08" },
    ];


    findAll() {
        return this.students;
    }

    findOne(id: number) {
        const student = this.students.find(student => student.id === id);
        if (!student) throw new NotFoundException(`Student with id ${id} not found`);
        return student;
    }

    create(createStudentDto: CreateStudentDto) {
        const id = this.students.length > 0 ? this.students[this.students.length - 1].id + 1 : 1;
        const student = { id, ...createStudentDto }
        this.students.push(student)
        return { status: "success", data: student }
    }

    updateAll(id: number, updatedata: CreateStudentDto) {
        const i = this.students.findIndex(s => s.id === id);
        if (i === -1) throw new NotFoundException(`Student with id ${id} not found`);
        this.students[i] = { id, ...updatedata }
        return this.students[i]
    }

    update(id: number, updateData: CreateStudentDto) {
        const i = this.students.findIndex(student => student.id === id);
        if (i === -1) throw new NotFoundException(`Student with id ${id} not found`);
        const updateStudent = { ...this.students[i], ...updateData }; 
        this.students[i] = updateStudent;
        return updateStudent;
    }

    remove(id: number) {
        const index = this.students.findIndex(s => s.id === id);
        if (index === -1) throw new NotFoundException(`Student with id ${id} not found`);
        this.students = this.students.filter(student => student.id !== id);
        return { status: "success" }
    }
}