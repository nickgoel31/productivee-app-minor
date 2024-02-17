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

  const currentTime = new Date(Date.now());
  const hours = currentTime.getHours().toString().padStart(2, '0'); // Ensure two-digit format
  const minutes = currentTime.getMinutes().toString().padStart(2, '0'); // Ensure two-digit format

  const formattedTime = `${hours}:${minutes}`;


  return (
    <main className="flex flex-col gap-8 h-full py-8 flex-1 pr-10">
        <div className="space-y-2">
          <h1 className="font-semibold text-4xl">Overview</h1>
          <p className="font-medium text-sm text-neutral-400">We are all about productivity</p>
        </div>

        <div className="w-full flex items-center justify-start">
          <div className="border rounded-xl p-4">
            <h2 className="text-xl font-medium">Time</h2>
            <p>{formattedTime}</p>
          </div>
        </div>

    </main>
  );
}

