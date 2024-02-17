import React from 'react'

const MainLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='h-full flex flex-col items-start py-14 justify-center'>{children}</div>
  )
}

export default MainLayout