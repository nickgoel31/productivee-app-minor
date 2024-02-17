export type Id = string | number;

export type Column = {
    id: Id;
    title: string;
    colorScheme: string,
    key:string
}

export type Task = {
    id: Id;
    columnId: Id;
    title: string;
    description?: string;
    workspaceId: Id;
    tags?: string[];
    createdAt: Date
}