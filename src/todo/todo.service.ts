import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './model/todo';

@Injectable()
export class TodoService {

    private todos: Todo[]= [];

    constructor(){
        const todo = new Todo();
        todo.name = 'sport';
        todo.description = 'faire du sport';
        this.todos = [
            todo
        ];
    }

    private findTodoById(id: string){
        const todo = this.todos.find(
            (actualTodo) => actualTodo.id === id
        )
        if(todo) 
        return(todo);
        throw new NotFoundException(`Le todo d'id ${id } n'existe pas`)
    }

    getTodos(): Todo[]{
        return this.todos;
    }

    getTodoById(id:string): Todo{
        return this.findTodoById(id);
    }

    postTodo(newTodo:CreateTodoDto){
        
        const {name, description} = newTodo;
        const todo = new Todo();
        todo.name = name;
        todo.description = description;

        this.todos.push(todo);
        return todo;
    }

    putTodo(newTodo:UpdateTodoDto,id:string){
        const {name, description, status} = newTodo;
        const todo = this.findTodoById(id);
        todo.name = name? name: todo.name;
        todo.description = description? description : todo.description;
        todo.status = status? status: todo.status;
        

        return(todo);
    }

    deleteTodo(id:string):Todo[]{
        const todo = this.findTodoById(id);
        this.todos.splice(this.todos.indexOf(todo),1);
        return (this.todos);
    }


}
