import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-6 items-center justify-between'>
        <h1 className='text-xl font-bold'>Productive.</h1>

        <ul>
            <Link href={"/new-features"}>{"What's new?"}</Link>
        </ul>
    </div>
  )
}

export default Navbar