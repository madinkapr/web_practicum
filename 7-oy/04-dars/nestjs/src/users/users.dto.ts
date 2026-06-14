import { IsString, IsNotEmpty, IsEnum } from "class-validator";

export class CreateUserDto {
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

    @IsEnum(['admin', 'teacher', 'student'])
    role!: string;
}
