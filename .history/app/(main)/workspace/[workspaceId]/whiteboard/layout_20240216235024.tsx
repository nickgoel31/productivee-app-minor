import React from 'react'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import SideToolBar from '../_components/whiteboard/side-tool-bar'


const WhiteBoardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='w-full h-full relative'>
      <ContextMenu>
        <SideToolBar />

        <ContextMenuTrigger className='w-full h-full'>
          <div className="w-full h-full">
            {children}
          </div>
        </ContextMenuTrigger>

        <ContextMenuContent>
          <ContextMenuItem>Profile</ContextMenuItem>
          <ContextMenuItem>Billing</ContextMenuItem>
          <ContextMenuItem>Team</ContextMenuItem>
          <ContextMenuItem>Subscription</ContextMenuItem>
        </ContextMenuContent>
      
    </ContextMenu>
  </div>
    
  )
}

export default WhiteBoardLayout