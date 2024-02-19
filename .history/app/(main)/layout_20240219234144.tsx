
import React from 'react'
import Sidebar from './_components/sidebar'
import { getAllWorkspaces } from '@/data/workspaces'
import Navbar from './_components/navbar'
import { auth } from '@clerk/nextjs'
import MobileSidebar from '@/components/mobile-sidebar'
import { cn } from '@/lib/utils'

const MainLayout = async ({children} : {children: React.ReactNode}) => {

  const {userId} = auth()

  if(!userId) return  <div>You must be logged in to view this page</div>

  const workspaces = await getAllWorkspaces(userId)


  return (
    <div className='h-full flex gap-10 justify-start'>
      <div className='fixed top-0 left-0 z-[10]  w-full'>
        <Navbar workspaces={workspaces}/>
      </div>
      <div className='lg:block hidden z-[20] border-r'>
        <Sidebar workspaces={workspaces}/>
      </div>

      <div className={cn('pt-[60px] px-6 lg:px-0 w-full h-full')}>
        {children}
      </div>
    </div>
  )
}

export default MainLayout