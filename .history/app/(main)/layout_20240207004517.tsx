
import React from 'react'
import Sidebar from './_components/sidebar'
import { getAllWorkspaces } from '@/data/workspaces'

const MainLayout = async ({children} : {children: React.ReactNode}) => {

  const workspaces = await getAllWorkspaces()

  console.log(workspaces)

  return (
    <div className='h-full flex  gap-10 justify-start'>
      <Sidebar />
      {children}
    </div>
  )
}

export default MainLayout