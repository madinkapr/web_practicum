import { IsString, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateGroupDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsNumber()
    courseId!: number;

    @IsNumber()
    lectureTeacherId!: number;

    @IsNumber()
    practiceTeacherId!: number;

    @IsNumber()
    roomId!: number;

    @IsString()
    @IsNotEmpty()
    startDate!: string;

    @IsOptional()
    @IsString()
    endDate?: string;

    @IsString()
    @IsNotEmpty()
    lectureDays!: string;

    @IsString()
    @IsNotEmpty()
    lectureStartTime!: string;

    @IsString()
    @IsNotEmpty()
    lectureEndTime!: string;

    @IsString()
    @IsNotEmpty()
    practiceDays!: string;

    @IsString()
    @IsNotEmpty()
    practiceStartTime!: string;

    @IsString()
    @IsNotEmpty()
    practiceEndTime!: string;
}
