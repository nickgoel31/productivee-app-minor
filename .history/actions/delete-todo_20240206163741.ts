"use server"

import { getAllTodos } from "@/data/todos"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"


type TodoProps = {
    id: string;
    title: string;
    isDone: boolean;
  }
  
  interface TodoPropsArray {
    isDoneTodos: TodoProps[];
  }



export const deleteTodoInDB = async (id:string) => {
    
    await db.toDo.delete({
        where: {id}
    })

    revalidatePath("/")
}

export const deleteAllTodoIsDone = async (id:string) => {

    const todos = await getAllTodos()
    const isDoneTodos: TodoProps[] = [];

    //FOR GETTING TODOS THAT ARE COMPLETED
    for(let i=0;i<todos.length;i++){
      if(todos[i].isDone){
        isDoneTodos.push(todos[i])
      }
    }

    for(let i=0; i<isDoneTodos.length;i++) {
        await db.toDo.delete({
            where: {
                id: isDoneTodos[i].id,
            }
        })
      }  
}