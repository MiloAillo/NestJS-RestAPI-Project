import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
    @IsInt()
    @IsNotEmpty()
    id: number

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    email?: string

    @IsOptional()
    @IsString()
    password?:string
}