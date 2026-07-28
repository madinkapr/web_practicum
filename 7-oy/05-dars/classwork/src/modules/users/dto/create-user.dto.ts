import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsPhoneNumber, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'Madina Primova' })
    @IsString()
    @IsNotEmpty()
    fullname!: string;

    @ApiProperty({ example: 'madina.primova@gmail.com' })
    @IsEmail()
    email!: string;

    @ApiProperty({ example: '+998990987643' })
    @IsPhoneNumber("UZ")
    contact!: string;

    @ApiProperty({ example: 'Toshkent, Mirzo Ulugbek tumani, 8-uy' })
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
