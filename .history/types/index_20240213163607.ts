export type Workspace = {
    id: string; 
  name: string; 
  description: string | null; 
  createdAt: Date;

}

export interface WorkspaceEditProps{
  id: string; 
  name: string; 
  description: string | null; 
  createdAt: string;
}


export interface KanbanColumnProps{
  colTitle: string;
  colKey: string;
  headingColor: string;
  tasks: TaskType[];
}

export interface TaskType {
  id:string,
  title:string,
  description?: string,
  // status: 'TODO' | 'IN_PROGRESS' | 'COMPLETED' | 'ON_HOLD'
  workspaceId:string,
  createdAt: Date,

}

// export interface SubTaskType {
//   id: string; 
//   title: string; 
//   SubTaskCreatedAt: Date; 
//   isDone: boolean; 
//   priority: number; 
//   taskId: string[];
// }