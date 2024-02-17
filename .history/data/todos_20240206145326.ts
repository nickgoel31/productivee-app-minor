import { db } from "@/lib/db"

export const getAllTodos = async () => {
    const todos = await db.toDo.findMany();

    return todos;
}