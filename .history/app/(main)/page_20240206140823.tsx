import Image from "next/image";
import TodoCard from "./_components/todo-card";

export default function Home() {
  return (
    <main>
        <h1 className="text-center font-semibold text-3xl">Todo List:</h1>
      <TodoCard />
    </main>
  );
}
