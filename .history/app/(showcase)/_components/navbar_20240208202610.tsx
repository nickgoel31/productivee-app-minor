"use client"

import { Button } from '@/components/ui/button'
import { UserButton, useAuth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {

    const {userId} = useAuth()

    const isLoggedIn = !!userId;

  return (
    <div className='flex px-40 py-6 items-center justify-between'>
        <Link href={"/showcase"} className='text-xl font-bold'>Productive.</Link>

        <div className='flex items-center gap-10'>
            <ul className='text-sm font-medium flex items-center gap-10'>
                <Link href={"/new-features"} className='hover:text-emerald-500 transition'>{"What's new?"}</Link>
                <Link href={"/#features"} className='hover:text-emerald-500 transition'>{"Features"}</Link>
                <Link href={"/about"} className='hover:text-emerald-500 transition'>{"About"}</Link>

            </ul>

            <div className='text-sm font-medium flex items-center gap-7'>
                {isLoggedIn ? (
                    <>
                        <Link href={"/"} className='bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent font-semibold'>{"Dashboard"}</Link>
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