import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full border-b py-4 h-[65px] px-7 flex items-center justify-end bg-background'>
        <UserButton afterSignOutUrl='/signin' />
    </div>
  )
}

export default Navbar