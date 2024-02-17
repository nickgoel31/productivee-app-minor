import { columns } from "@/data/kanban"


export const getColumnById = (id:number) => {
    const column = columns.filter(col => col.id === id)
}