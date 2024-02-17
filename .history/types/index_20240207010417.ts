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