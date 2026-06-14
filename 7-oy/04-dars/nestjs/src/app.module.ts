import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { TeachersModule } from "./teachers/teachers.module";
import { StudentsModule } from "./students/students.module";
import { RoomsModule } from "./rooms/rooms.module";
import { CourseModule } from "./course/course.module";
import { GroupsModule } from "./groups/groups.module";

@Module({
    imports: [UsersModule, TeachersModule, StudentsModule, RoomsModule, CourseModule, GroupsModule]
})
export class AppModule {}