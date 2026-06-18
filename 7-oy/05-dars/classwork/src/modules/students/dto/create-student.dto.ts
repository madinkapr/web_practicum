import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum, IsNumber, IsOptional } from "class-validator";

export class CreateStudentDto {
    @ApiProperty({ example: 'Sardor' })
    @IsString()
    @IsNotEmpty()
    firstName!: string;

    @ApiProperty({ example: 'Toshmatov' })
    @IsString()
    @IsNotEmpty()
    lastName!: string;

    @ApiProperty({ example: '+998904445566' })
    @IsString()
    @IsNotEmpty()
    phone!: string;

    @ApiProperty({ example: 'Male', enum: ['Male', 'Female'] })
    @IsEnum(['Male', 'Female'])
    gender!: string;

    @ApiProperty({ example: '123456' })
    @IsString()
    @IsNotEmpty()
    password!: string;

    @ApiProperty({ example: 1 })
    @IsNumber()
    groupId!: number;

    @ApiPropertyOptional({ example: '2003-05-14' })
    @IsOptional()
    @IsString()
    birthDate?: string;
}
