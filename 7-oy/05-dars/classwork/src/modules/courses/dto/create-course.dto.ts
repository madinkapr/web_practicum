import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional, Min } from "class-validator";

export class CreateCourseDto {
    @ApiProperty({ example: 'Web Development' })
    @IsString()
    @IsNotEmpty()
    name!: string;

    @ApiProperty({ example: 6 })
    @IsNumber()
    @Min(1)
    duration!: number;

    @ApiProperty({ example: 1890000 })
    @IsNumber()
    @Min(0)
    price!: number;

    @ApiPropertyOptional({ example: 'Frontend va Backend dasturlash' })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty({ example: 72 })
    @IsNumber()
    @Min(0)
    lectureCount!: number;

    @ApiProperty({ example: 48 })
    @IsNumber()
    @Min(0)
    practiceCount!: number;
}
