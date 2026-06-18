import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'Madina' })
    @IsString()
    @IsNotEmpty()
    firstName!: string;

    @ApiProperty({ example: 'Primova' })
    @IsString()
    @IsNotEmpty()
    lastName!: string;

    @ApiProperty({ example: '+998931801444' })
    @IsString()
    @IsNotEmpty()
    phone!: string;

    @ApiProperty({ example: 'Female', enum: ['Male', 'Female'] })
    @IsEnum(['Male', 'Female'])
    gender!: string;

    @ApiProperty({ example: '123456' })
    @IsString()
    @IsNotEmpty()
    password!: string;

    @ApiProperty({ example: 'student', enum: ['admin', 'teacher', 'student'] })
    @IsEnum(['admin', 'teacher', 'student'])
    role!: string;
}
