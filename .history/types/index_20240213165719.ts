import { $Enums, TaskStatus } from "@prisma/client";
import { DragEvent } from "react";

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

export interface TaskType extends HandleThings {
  id: string;
  title: string;
  description: string | null;
  status: $Enums.TaskStatus;
  workspaceId: string;
  createdAt: Date;
}

type HandleThings = {
  handleDragStart?: (e: DragEvent<HTMLDivElement>, task: TaskType) => void
}

// export interface SubTaskType {
//   id: string; 
//   title: string; 
//   SubTaskCreatedAt: Date; 
//   isDone: boolean; 
//   priority: number; 
//   taskId: string[];
// }