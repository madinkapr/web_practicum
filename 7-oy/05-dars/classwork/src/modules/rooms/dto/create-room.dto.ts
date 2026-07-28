import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, Min } from "class-validator";

export class CreateRoomDto {
    @ApiProperty({ example: 'A-101' })
    @IsString()
    @IsNotEmpty()
    name!: string;

    @ApiProperty({ example: 30 })
    @IsNumber()
    @Min(1)
    capacity!: number;
}
