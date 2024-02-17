import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-6 items-center justify-between'>
        <h1 className='text-xl font-bold'>Productive.</h1>

        <div className='flex items-center'>
            <ul className='text-sm font-medium flex items-center gap-10'>
                <Link href={"/new-features"}>{"What's new?"}</Link>
                <Link href={"/new-features"}>{"Features"}</Link>
                <Link href={"/new-features"}>{"About"}</Link>

            </ul>

            <div className='text-sm font-medium flex items-center gap-5'>
                <Link href={"/new-features"}>{"Dashboard"}</Link>

                <Button>Log in</Button>
            </div>
        </div>
    </div>
  )
}

export default Navbar