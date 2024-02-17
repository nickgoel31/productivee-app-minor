import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full border-b '>
        <div>
          <UserButton afterSignOutUrl='/signin' />
        </div>
    </div>
  )
}

export default Navbar