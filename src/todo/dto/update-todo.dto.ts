import { IsEnum, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { TodoStatusEnum } from "../enums/todo.status.enum";

export class UpdateTodoDto{

    @IsNotEmpty({message: "Le name est obligatoire"})
    @MinLength(3,{message: "Le name doit avoir une taille minimale de 3 caractères"})
    @MaxLength(10,{message: "Le name doit avoir une taille maximale de 10 caractères"})
    name: string;

    @IsNotEmpty({message: "La description est obligatoire"})
    @MinLength(10,{message: "La description doit avoir une taille minimale de 10 caractères"})
    description: string;

    @IsEnum(TodoStatusEnum)
    status: TodoStatusEnum;
}