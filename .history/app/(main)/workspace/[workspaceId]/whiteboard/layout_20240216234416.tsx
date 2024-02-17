import React from 'react'

const WhiteBoardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='w-full h-full bg-red-500'>{children}</div>
  )
}

export default WhiteBoardLayout