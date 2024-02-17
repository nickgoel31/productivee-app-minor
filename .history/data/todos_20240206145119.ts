import { db } from "@/lib/db"

export const getAllTodos = async () => {
    await db.toDo.findMany();
}