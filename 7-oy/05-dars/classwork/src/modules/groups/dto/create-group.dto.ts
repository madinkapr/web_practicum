import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateGroupDto {
    @ApiProperty({ example: 'Web Praktikum N6' })
    @IsString()
    @IsNotEmpty()
    name!: string;

    @ApiProperty({ example: 1 })
    @IsNumber()
    courseId!: number;

    @ApiProperty({ example: 1 })
    @IsNumber()
    lectureTeacherId!: number;

    @ApiProperty({ example: 2 })
    @IsNumber()
    practiceTeacherId!: number;

    @ApiProperty({ example: 1 })
    @IsNumber()
    roomId!: number;

    @ApiProperty({ example: '2025-10-21' })
    @IsString()
    @IsNotEmpty()
    startDate!: string;

    @ApiPropertyOptional({ example: '2026-04-21' })
    @IsOptional()
    @IsString()
    endDate?: string;

    @ApiProperty({ example: 'Dushanba, Chorshanba' })
    @IsString()
    @IsNotEmpty()
    lectureDays!: string;

    @ApiProperty({ example: '09:00' })
    @IsString()
    @IsNotEmpty()
    lectureStartTime!: string;

    @ApiProperty({ example: '11:00' })
    @IsString()
    @IsNotEmpty()
    lectureEndTime!: string;

    @ApiProperty({ example: 'Seshanba, Payshanba' })
    @IsString()
    @IsNotEmpty()
    practiceDays!: string;

    @ApiProperty({ example: '14:00' })
    @IsString()
    @IsNotEmpty()
    practiceStartTime!: string;

    @ApiProperty({ example: '16:00' })
    @IsString()
    @IsNotEmpty()
    practiceEndTime!: string;
}
