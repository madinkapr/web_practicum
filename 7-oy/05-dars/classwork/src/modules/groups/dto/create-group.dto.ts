import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsEnum, IsArray } from "class-validator";
import { WeekDays } from '@prisma/client';

export class CreateGroupDto {
    @ApiProperty({ example: 'Web Praktikum N6' })
    @IsString()
    @IsNotEmpty()
    name!: string;

    @ApiProperty({ example: [WeekDays.MONDAY, WeekDays.WEDNESDAY], enum: WeekDays, isArray: true })
    @IsArray()
    @IsEnum(WeekDays, { each: true })
    week_days!: WeekDays[];

    @ApiProperty({ example: '09:00' })
    @IsString()
    @IsNotEmpty()
    start_time!: string;

    @ApiProperty({ example: 1 })
    @IsNumber()
    courseId!: number;

    @ApiProperty({ example: 1 })
    @IsNumber()
    roomId!: number;

    @ApiProperty({ example: 1 })
    @IsNumber()
    userId!: number;
}
