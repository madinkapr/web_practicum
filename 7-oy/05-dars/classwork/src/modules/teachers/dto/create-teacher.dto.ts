import { IsString, IsNotEmpty, IsEnum, IsNumber, IsOptional, Min } from "class-validator";

export class CreateTeacherDto {
    @IsString()
    @IsNotEmpty()
    firstName!: string;

    @IsString()
    @IsNotEmpty()
    lastName!: string;

    @IsString()
    @IsNotEmpty()
    phone!: string;

    @IsEnum(['Male', 'Female'])
    gender!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;

    @IsNumber()
    courseId!: number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    experience?: number;
}
