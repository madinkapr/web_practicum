import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTeacherDto } from "./teachers.dto";


@Injectable()
export class TeachersService {
    private teachers: any[] = [
        { id: 1, firstName: "Jahongir", lastName: "Xasanov", phone: "+998901112233", gender: "Male", password: "123456", subject: "Web Development", experience: 5 },
        { id: 2, firstName: "Dilshod", lastName: "Gaibnazarov", phone: "+998902223344", gender: "Male", password: "123456", subject: "Python", experience: 3 },
        { id: 3, firstName: "Malika", lastName: "Yusupova", phone: "+998903334455", gender: "Female", password: "123456", subject: "Graphic Design", experience: 4 },
        { id: 4, firstName: "Sardor", lastName: "Toshmatov", phone: "+998904445566", gender: "Male", password: "123456", subject: "Mobile Development", experience: 6 },
        { id: 5, firstName: "Nilufar", lastName: "Rahimova", phone: "+998905556677", gender: "Female", password: "123456", subject: "Machine Learning", experience: 2 },
    ];


    findAll() {
        return this.teachers;
    }

    findOne(id: number) {
        const teacher = this.teachers.find(t => t.id === id);
        if (!teacher) {
            throw new NotFoundException(`Teacher with id ${id} not found`);
        }
        return teacher
    }

    create(createTeacherDto: CreateTeacherDto) {
        const id = this.teachers.length > 0 ? this.teachers[this.teachers.length - 1].id + 1 : 1;
        const teacher = { id, ...createTeacherDto };
        this.teachers.push(teacher);
        return { status: "success", data: teacher };
    }

    updateAll(id: number, updateData: CreateTeacherDto) {
        const i = this.teachers.findIndex(teacher => teacher.id === id);
        if (i === -1) throw new NotFoundException(`Teacher with id ${id} not found`);
        this.teachers[i] = { id, ...updateData }
        return this.teachers[i];
    }

    update(id: number, updateData: Partial<CreateTeacherDto>) {
        const index = this.teachers.findIndex(t => t.id === id);
        if (index === -1) {
            throw new NotFoundException(`Teacher with id ${id} not found`)
        }
        const updateTeacher = { ...this.teachers[index], ...updateData };
        this.teachers[index] = updateTeacher
        return updateTeacher;
    }

    remove(id: number) {
        const index = this.teachers.findIndex(t => t.id === id);
        if (index === -1) throw new NotFoundException(`Teacher with id ${id} not found`);
        this.teachers = this.teachers.filter(t => t.id !== id);
        return { status: "success" };
    }


}