import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./users.dto";


@Injectable()
export class UsersService {
    private users = [
        { id: 1, firstName: "Madina", lastName: "Primova", phone: "+998931801444", gender: "Female", password: "123456", role: "student" },
        { id: 2, firstName: "Jahongir", lastName: "Xasanov", phone: "+998901112233", gender: "Male", password: "123456", role: "teacher" },
        { id: 3, firstName: "Sardor", lastName: "Toshmatov", phone: "+998904445566", gender: "Male", password: "123456", role: "admin" },
        { id: 4, firstName: "Nilufar", lastName: "Rahimova", phone: "+998905556677", gender: "Female", password: "123456", role: "student" },
        { id: 5, firstName: "Dilshod", lastName: "Gaibnazarov", phone: "+998902223344", gender: "Male", password: "123456", role: "teacher" },
    ];


    findAll() {
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        return user;
    }

    create(createUserDto: CreateUserDto) {
        const id = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
        const user = { id, ...createUserDto };
        this.users.push(user);
        return { success: true, data: user };
    }

    updateAll(id: number, updateData: CreateUserDto) {
        const i = this.users.findIndex(user => user.id === id);
        if (i === -1) throw new NotFoundException(`User with id ${id} not found`);
        this.users[i] = { id, ...updateData }
        return this.users[i];
    }

    update(id: number, updateData: Partial<CreateUserDto>) {
        const index = this.users.findIndex(u => u.id === id);
        if (index === -1) throw new NotFoundException(`User with id ${id} not found`);
        const updateUser = { ...this.users[index], ...updateData };
        this.users[index] = updateUser;
        return updateUser;

    }

    remove(id: number) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) throw new NotFoundException(`User with id ${id} not found`);
        this.users = this.users.filter(user => user.id !== id);
        return { status: "success" }
    }

}