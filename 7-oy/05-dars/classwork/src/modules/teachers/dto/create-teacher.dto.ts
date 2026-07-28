import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsPhoneNumber, MaxLength, MinLength } from "class-validator";

export class CreateTeacherDto {
    @ApiProperty({ example: 'Jahongir Xasanov' })
    @IsString()
    @IsNotEmpty()
    fullname!: string;

    @ApiProperty({ example: 'jahongir.xasanov@gmail.com' })
    @IsEmail()
    email!: string;

    @ApiProperty({ example: '+998901112233' })
    @IsPhoneNumber("UZ")
    contact!: string;

    @ApiProperty({ example: 'Toshkent, Yakkasaroy tumani, 12-uy' })
    @IsString()
    @IsNotEmpty()
    address!: string;

    @ApiProperty({ example: '123456' })
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password!: string;
}
