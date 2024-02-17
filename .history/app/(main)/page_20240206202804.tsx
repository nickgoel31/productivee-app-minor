import Image from "next/image";
import TodoCard from "./_components/todo-card";
import NewTodoAdd from "./_components/new-todo-add";
import { getAllTodos } from "@/data/todos";
import { sortBy } from 'lodash'; // Assuming you have Lodash installed
import { Cat, Dog } from "lucide-react";
import { deleteAllTodoIsDone } from "@/actions/delete-todo";


type TodoProps = {
  id: string;
  title: string;
  isDone: boolean;
}

interface TodoPropsArray {
  isDoneTodos: TodoProps[];
}


export default async function Home() {

    const todos = await getAllTodos()

    const sortedTodos= todos.sort(function (a, b) {
      return new Date(a.createdAt).getTime( ) - new Date(b.createdAt).getTime();
    })

    const onClick = () => {
      for(let i =0 ;i < todos.length; i++){
        deleteAllTodoIsDone(todos[i].id)
      }
    }
    

  return (
    <main className="flex flex-col gap-7 py-10 flex-1 bg-red-100">
        <h1 className="text-center font-semibold text-4xl">Todo List</h1>

        {!todos[0] && (
          <div className="flex flex-col items-center gap-2 mt-6 text-neutral-600">
            <Cat size={72} />
            <h3 className="text-3xl font-semibold text-center">Create a todo item!</h3>
          </div>
        )}

        <div className="flex flex-col gap-3">
            {sortedTodos.map((todo) => (
                <TodoCard id={todo.id} key={todo.id} title={todo.title} isDone={todo.isDone}/>
            ))}
        </div>
        {/* {isDoneTodos.length > 0 && (
          <div onClick={onClick} className="w-fit text-xs translate-y-[-10px] text-neutral-400 font-medium underline cursor-pointer transition hover:text-neutral-100">
            Delete all completed Todo items?
          </div>
        )} */}

        <NewTodoAdd />
    </main>
  );
}

