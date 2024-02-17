export type Id = string | number;

export type Column = {
    id: number;
    title: string;
    colorScheme: string,
    key:string
}

export type Task = {
    id: string;
    columnId: number;
    title: string;
    description: string | null;
    workspaceId: Id;
    tags?: string[];
    createdAt: Date
    kanbanSubtasks:KanbanSubtask[] | [];
}


export type KanbanSubtask = {
    id:string;
    title:string;
    priority: number;
    createdAt: Date;
    taskId: string;
    isDone: boolean;
}