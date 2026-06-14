import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateGroupDto } from "./groups.dto";

@Injectable()
export class GroupsService {
    private groups: any[] = [
        { id: 1, name: "Web Praktikum N6", courseId: 1, lectureTeacherId: 1, practiceTeacherId: 2, roomId: 1, startDate: "2025-10-21", lectureDays: "Dushanba, Chorshanba", lectureStartTime: "09:00", lectureEndTime: "11:00", practiceDays: "Seshanba, Payshanba", practiceStartTime: "14:00", practiceEndTime: "16:00" },
        { id: 2, name: "Python N3", courseId: 2, lectureTeacherId: 3, practiceTeacherId: 4, roomId: 2, startDate: "2025-11-01", lectureDays: "Seshanba, Juma", lectureStartTime: "10:00", lectureEndTime: "12:00", practiceDays: "Dushanba, Payshanba", practiceStartTime: "15:00", practiceEndTime: "17:00" },
        { id: 3, name: "Design N2", courseId: 3, lectureTeacherId: 5, practiceTeacherId: 5, roomId: 3, startDate: "2025-12-01", lectureDays: "Dushanba, Chorshanba, Juma", lectureStartTime: "13:00", lectureEndTime: "15:00", practiceDays: "Seshanba, Payshanba", practiceStartTime: "13:00", practiceEndTime: "15:00" },
    ];

    findAll() {
        return this.groups;
    }

    findOne(id: number) {
        const group = this.groups.find(g => g.id === id);
        if (!group) throw new NotFoundException(`Group with id ${id} not found`);
        return group;
    }

    create(createGroupDto: CreateGroupDto) {
        const id = this.groups.length > 0 ? this.groups[this.groups.length - 1].id + 1 : 1;
        const group = { id, ...createGroupDto };
        this.groups.push(group);
        return { success: true, data: group };
    }

    updateAll(id: number, updateData: CreateGroupDto) {
        const index = this.groups.findIndex(g => g.id === id);
        if (index === -1) throw new NotFoundException(`Group with id ${id} not found`);
        this.groups[index] = { id, ...updateData };
        return this.groups[index];
    }

    update(id: number, updateData: Partial<CreateGroupDto>) {
        const index = this.groups.findIndex(g => g.id === id);
        if (index === -1) throw new NotFoundException(`Group with id ${id} not found`);
        this.groups[index] = { ...this.groups[index], ...updateData };
        return this.groups[index];
    }

    remove(id: number) {
        const index = this.groups.findIndex(g => g.id === id);
        if (index === -1) throw new NotFoundException(`Group with id ${id} not found`);
        this.groups = this.groups.filter(g => g.id !== id);
        return { success: true };
    }
}
