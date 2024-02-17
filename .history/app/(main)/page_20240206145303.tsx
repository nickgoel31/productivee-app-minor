import Image from "next/image";
import TodoCard from "./_components/todo-card";
import NewTodoAdd from "./_components/new-todo-add";
import { getAllTodos } from "@/data/todos";

export default async function Home() {

    // const {} = await getAllTodos()

    // console.log(todos)

  return (
    <main className="flex flex-col gap-7">
        <h1 className="text-center font-semibold text-4xl">Todo List</h1>
        {/* <TodoCard title={}/> */}
        <NewTodoAdd />
    </main>
  );
}
