import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum, IsNumber, IsOptional, Min } from "class-validator";

export class CreateTeacherDto {
    @ApiProperty({ example: 'Jahongir' })
    @IsString()
    @IsNotEmpty()
    firstName!: string;

    @ApiProperty({ example: 'Xasanov' })
    @IsString()
    @IsNotEmpty()
    lastName!: string;

    @ApiProperty({ example: '+998901112233' })
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
    courseId!: number;

    @ApiPropertyOptional({ example: 5 })
    @IsOptional()
    @IsNumber()
    @Min(0)
    experience?: number;
}
