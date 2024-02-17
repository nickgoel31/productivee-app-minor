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
    <main className="flex flex-col gap-8 h-full py-8 flex-1 ">
        <div className="space-y-2">
          <h1 className="font-semibold text-4xl">Overview</h1>
          <p className="font-medium text-sm text-neutral-400">We are all about productivity</p>
        </div>

        <div className="border">

        </div>

    </main>
  );
}

