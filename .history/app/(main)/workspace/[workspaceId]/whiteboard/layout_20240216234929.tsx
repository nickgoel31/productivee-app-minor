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
    <ContextMenu>
      <div className='w-full h-full relative'>
        <SideToolBar />
      </div>

      <ContextMenuTrigger className='w-full h-full'>
        <div className="">
          {children}
        </div>
      </ContextMenuTrigger>
      
    

    </ContextMenu>
  )
}

export default WhiteBoardLayout