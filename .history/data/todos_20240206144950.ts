import { db } from "@/lib/db"

export const getAllTodos = () => {
    db.toDo.findMany();
}