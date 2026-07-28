import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum, IsNumber, IsOptional, IsEmail, IsPhoneNumber, MaxLength, MinLength } from "class-validator";

export class CreateStudentDto {
    @ApiProperty({ example: 'Sardor Toshmatov' })
    @IsString()
    @IsNotEmpty()
    fullname!: string;

    @ApiProperty({ example: 'sardor.toshmatov@gmail.com' })
    @IsString()
    @IsEmail()
    email!: string;

    @ApiProperty({ example: '+998904445566' })
    @IsPhoneNumber("UZ")
    contact!: string;

    @ApiProperty({ example: 'Toshkent, Chilonzor tumani, 5-uy' })
    @IsNotEmpty()
    @IsString()
    address!: string;

    @ApiProperty({ example: '123456' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    @MinLength(6)
    password!: string;
}
