import { IsString, IsNotEmpty, IsNumber, IsOptional, IsEnum, Min } from "class-validator";

export class CreateRoomDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsNumber()
    @Min(1)
    capacity!: number;

    @IsOptional()
    @IsNumber()
    floor?: number;

    @IsOptional()
    @IsEnum(['classroom', 'lab', 'conference'])
    type?: string;
}
