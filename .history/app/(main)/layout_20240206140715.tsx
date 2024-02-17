import React from 'react'

const MainLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='h-full flex items-center justify-start'>{children}</div>
  )
}

export default MainLayout