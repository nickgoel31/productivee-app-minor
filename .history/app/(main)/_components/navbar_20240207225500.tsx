import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full border-b py-4 h-[60px] flex items-center justify-end'>
        <div>
          <UserButton afterSignOutUrl='/signin' />
        </div>
    </div>
  )
}

export default Navbar