
import React from 'react'
import Sidebar from './_components/sidebar'
import { getAllWorkspaces } from '@/data/workspaces'

const MainLayout = async ({children} : {children: React.ReactNode}) => {

  const workspaces = await getAllWorkspaces()


  return (
    <div className='h-full flex  gap-10 justify-start'>
      <Sidebar workspaces={workspaces}/>
      {children}
    </div>
  )
}

export default MainLayout