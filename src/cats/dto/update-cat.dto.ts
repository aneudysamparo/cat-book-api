import { IsInt, IsString } from 'class-validator';

export class UpdateCatDto {
    @IsInt()
    readonly id: number;

    @IsString()
    readonly name: string;

    @IsInt()
    readonly age: number;

    @IsString()
    readonly breed: string;
}