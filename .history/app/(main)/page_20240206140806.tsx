import Image from "next/image";
import TodoCard from "./_components/todo-card";

export default function Home() {
  return (
    <main>
        <h1>Todo List:</h1>
      <TodoCard />
    </main>
  );
}
