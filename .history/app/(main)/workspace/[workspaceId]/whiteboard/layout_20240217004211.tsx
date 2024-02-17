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
        <SideToolBar />

          <div className="w-full h-full">
            {children}
          </div>


      
  </div>
    
  )
}

export default WhiteBoardLayout