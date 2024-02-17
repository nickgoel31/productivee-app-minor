
import React from 'react'
import Sidebar from './_components/sidebar'

const MainLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='h-full flex items-center gap-10 justify-start'>
      <Sidebar />
      {children}
    </div>
  )
}

export default MainLayout