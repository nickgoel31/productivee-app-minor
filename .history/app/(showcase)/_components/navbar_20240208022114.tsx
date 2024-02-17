"use client"

import { Button } from '@/components/ui/button'
import { UserButton, useAuth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {

    const {userId} = useAuth()

    const isLoggedIn = !!userId;

  return (
    <div className='flex py-6 items-center justify-between'>
        <h1 className='text-xl font-bold'>Productive.</h1>

        <div className='flex items-center gap-10'>
            <ul className='text-sm font-medium flex items-center gap-10'>
                <Link href={"/new-features"}>{"What's new?"}</Link>
                <Link href={"/new-features"}>{"Features"}</Link>
                <Link href={"/new-features"}>{"About"}</Link>

            </ul>

            <div className='text-sm font-medium flex items-center gap-5'>
                {isLoggedIn ? (
                    <>
                        <Link href={"/new-features"} className='bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent'>{"Dashboard"}</Link>
                        <UserButton afterSignOutUrl='/showcase'/>
                    </>
                ) : (
                    <>
                        <Button asChild><Link href={"/sign-in"}>Log in</Link></Button>
                    </>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar