import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateTodoDto{

    @IsNotEmpty({message: "Le name est obligatoire"})
    @MinLength(3,{message: "Le name doit avoir une taille minimale de 3 caractères"})
    @MaxLength(10,{message: "Le name doit avoir une taille maximale de 10 caractères"})
    name: string;

    @IsNotEmpty({message: "La description est obligatoire"})
    @MinLength(10,{message: "La description doit avoir une taille minimale de 10 caractères"})
    description: string;
}