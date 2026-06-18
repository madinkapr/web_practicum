import { IsString, IsNotEmpty, IsNumber, IsOptional, Min } from "class-validator";

export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsNumber()
    @Min(1)
    duration!: number;

    @IsNumber()
    @Min(0)
    price!: number;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNumber()
    @Min(0)
    lectureCount!: number;

    @IsNumber()
    @Min(0)
    practiceCount!: number;
}
