"use client"
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
        <SheetContent>
            <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </SheetDescription>
            </SheetHeader>
        </SheetContent>
    </Sheet>

  )
}

export default MobileSidebar


  