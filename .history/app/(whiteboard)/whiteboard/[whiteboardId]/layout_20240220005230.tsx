import React from 'react'
import WhiteboardNavbar from '../../_components/whiteboard-nav'

const WhiteboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='w-full h-full relative'>
        <WhiteboardNavbar />

        <div className='w-full h-full'>
            {children}
        </div>
    </div>
  )
}

export default WhiteboardLayout