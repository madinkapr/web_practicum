import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, Min } from "class-validator";

export class CreateCourseDto {
    @ApiProperty({ example: 'Web Development' })
    @IsString()
    @IsNotEmpty()
    name!: string;

    @ApiProperty({ example: 1890000 })
    @IsNumber()
    @Min(0)
    price!: number;

    @ApiProperty({ example: 6 })
    @IsNumber()
    @Min(1)
    duration_month!: number;

    @ApiProperty({ example: 432 })
    @IsNumber()
    @Min(1)
    duration_hours!: number;
}
