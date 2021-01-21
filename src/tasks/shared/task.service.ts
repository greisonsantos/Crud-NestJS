import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
    tasks: Task[]= [
        {id:1, description:'teste 1', completed:false},
        {id:2, description:'teste 2', completed:false},
        {id:3, description:'teste 3', completed:false},
    ];


    getAll(){
       return this.tasks;
    }

    getById(id:number){

        // return this.tasks[id]
        const task = this.tasks.find((value)=> value.id= id);
        return task
    }

    create(task: Task){

    }
    
    update(task: Task){

    }

    delete(id:number){

    }
} 
