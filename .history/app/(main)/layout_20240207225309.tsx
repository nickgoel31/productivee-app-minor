
import React from 'react'
import Sidebar from './_components/sidebar'
import { getAllWorkspaces } from '@/data/workspaces'
import Navbar from './_components/navbar'

const MainLayout = async ({children} : {children: React.ReactNode}) => {

  const workspaces = await getAllWorkspaces()


  return (
    <div className='h-full flex  gap-10 justify-start'>
      <div className='pl-64'>

      </div>
      <Navbar />
      <Sidebar workspaces={workspaces}/>
      {children}
    </div>
  )
}

export default MainLayout