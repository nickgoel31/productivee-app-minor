import BackBtn from '@/app/(main)/_components/back-btn'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const WhiteboardNavbar = () => {
  return (
    <div className='fixed top-0 bg-background left-0 h-[55px] w-full border-b z-[10] px-16 py-2 flex items-center justify-between'>
        <div>
            <h2 className='text-lg font-medium'>Whiteboard</h2>
        </div>

        <div className='flex items-center gap-5'>
            <BackBtn />
            <UserButton afterSignOutUrl='/showcase'/>
        </div>
    </div>
  )
}

export default WhiteboardNavbar