import { IsInt, IsString } from 'class-validator';

export class CreateCatDto {
    @IsInt()
    readonly id: number;

    @IsString()
    readonly name: string;

    @IsInt()
    readonly age: number;

    @IsString()
    readonly breed: string;
}
