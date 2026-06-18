import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional, IsEnum, Min } from "class-validator";

export class CreateRoomDto {
    @ApiProperty({ example: 'A-101' })
    @IsString()
    @IsNotEmpty()
    name!: string;

    @ApiProperty({ example: 30 })
    @IsNumber()
    @Min(1)
    capacity!: number;

    @ApiPropertyOptional({ example: 1 })
    @IsOptional()
    @IsNumber()
    floor?: number;

    @ApiPropertyOptional({ example: 'classroom', enum: ['classroom', 'lab', 'conference'] })
    @IsOptional()
    @IsEnum(['classroom', 'lab', 'conference'])
    type?: string;
}
