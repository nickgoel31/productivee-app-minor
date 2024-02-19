import React from 'react'

const WhiteboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <div className='w-full h-full'>
            {children}
        </div>
    </div>
  )
}

export default WhiteboardLayout