export type Id = string | number;

export type Column = {
    id: Id;
    title: string;
    colorScheme: string,
    key:string
}

export type Task = {
    id: string;
    columnId: number;
    title: string;
    description?: string;
    workspaceId: Id;
    tags?: string[];
    createdAt: Date
}