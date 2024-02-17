import { Sidebar } from 'lucide-react'
import React from 'react'

const MainLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='h-full flex flex-col items-center py-14 justify-start'>
      <Sidebar />
      {children}
    </div>
  )
}

export default MainLayout