import { columns } from "@/data/kanban"


export const getColumnById = (id:number) => {
    const filteredColumns = columns.filter(col => col.id === id)

    const column = filteredColumns[0]

    return column;
}