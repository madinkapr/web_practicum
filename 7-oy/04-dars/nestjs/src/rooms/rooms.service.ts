import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateRoomDto } from "./rooms.dto";

@Injectable()
export class RoomsService {
    private rooms: any[] = [
        { id: 1, name: "A-101", capacity: 30, floor: 1, type: "classroom" },
        { id: 2, name: "A-102", capacity: 25, floor: 1, type: "classroom" },
        { id: 3, name: "Lab-1", capacity: 20, floor: 2, type: "lab" },
        { id: 4, name: "Lab-2", capacity: 20, floor: 2, type: "lab" },
        { id: 5, name: "Conf-1", capacity: 50, floor: 3, type: "conference" },
    ];

    findAll() {
        return this.rooms;
    }

    findOne(id: number) {
        const room = this.rooms.find(r => r.id === id);
        if (!room) throw new NotFoundException(`Room with id ${id} not found`);
        return room;
    }

    create(createRoomDto: CreateRoomDto) {
        const id = this.rooms.length > 0 ? this.rooms[this.rooms.length - 1].id + 1 : 1;
        const room = { id, ...createRoomDto };
        this.rooms.push(room);
        return { success: true, data: room };
    }

    updateAll(id: number, updateData: CreateRoomDto) {
        const index = this.rooms.findIndex(r => r.id === id);
        if (index === -1) throw new NotFoundException(`Room with id ${id} not found`);
        this.rooms[index] = { id, ...updateData };
        return this.rooms[index];
    }

    update(id: number, updateData: Partial<CreateRoomDto>) {
        const index = this.rooms.findIndex(r => r.id === id);
        if (index === -1) throw new NotFoundException(`Room with id ${id} not found`);
        this.rooms[index] = { ...this.rooms[index], ...updateData };
        return this.rooms[index];
    }

    remove(id: number) {
        const index = this.rooms.findIndex(r => r.id === id);
        if (index === -1) throw new NotFoundException(`Room with id ${id} not found`);
        this.rooms = this.rooms.filter(r => r.id !== id);
        return { success: true };
    }
}
