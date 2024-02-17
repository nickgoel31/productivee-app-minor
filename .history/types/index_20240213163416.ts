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
  tasks?: TaskType[];
}

export interface TaskType {
  title:string,
  id:string,
  description: string | undefined,
  workspaceId:string,
  createdAt: Date,
  status: 'TODO' | 'IN_PROGRESS' | 'COMPLETED' | 'ON_HOLD'

}

// export interface SubTaskType {
//   id: string; 
//   title: string; 
//   SubTaskCreatedAt: Date; 
//   isDone: boolean; 
//   priority: number; 
//   taskId: string[];
// }