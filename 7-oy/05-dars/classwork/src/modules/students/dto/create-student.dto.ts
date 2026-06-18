import { IsString, IsNotEmpty, IsEnum, IsNumber, IsOptional } from "class-validator";

export class CreateStudentDto {
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
    groupId!: number;

    @IsOptional()
    @IsString()
    birthDate?: string;
}
