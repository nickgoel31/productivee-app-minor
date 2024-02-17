"use client"
import Sidebar from "@/app/(main)/_components/sidebar";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

interface Workspace {
    id: string; 
    name: string; 
    description: string | null; 
    createdAt: Date;
  }
  
  interface WorkspaceListProps {
    workspaces: Workspace[];
  }


const MobileSidebar = ({workspaces}: WorkspaceListProps) => {
  return (
    <Sheet>
        <SheetTrigger className="flex md:hidden">
            <div className="p-2">
                <Menu />
            </div>
        </SheetTrigger>
        <SheetContent side={"left"}>
            <Sidebar workspaces={workspaces}/>
        </SheetContent>
    </Sheet>

  )
}

export default MobileSidebar


  