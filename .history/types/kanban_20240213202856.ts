export type Id = string | number;

export type Column = {
    id: Id;
    title: string;
    headingColor: string
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