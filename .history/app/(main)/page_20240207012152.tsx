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
    

  return (
    <main className="flex flex-col  gap-7 h-full py-14 flex-1 ">
        <h1 className="text-center font-semibold text-4xl">Todo List</h1>


    </main>
  );
}

