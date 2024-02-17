
import React from 'react'
import Sidebar from './_components/sidebar'
import { getAllWorkspaces } from '@/data/workspaces'
import Navbar from './_components/navbar'

const MainLayout = async ({children} : {children: React.ReactNode}) => {

  const workspaces = await getAllWorkspaces()


  return (
    <div className='h-full flex  gap-10 justify-start'>
      <div className='fixed top-0 left-0 z-[10] pl-64 w-full'>
        <Navbar />
      </div>
      <Sidebar workspaces={workspaces}/>

      <div className='pt-[65px]'>

        {children}
      </div>
    </div>
  )
}

export default MainLayout