import React from 'react'

const MainLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='h-full flex items-start py-10 justify-center'>{children}</div>
  )
}

export default MainLayout