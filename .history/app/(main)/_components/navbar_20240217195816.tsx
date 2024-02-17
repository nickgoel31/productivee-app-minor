"use client"

import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { UserButton } from '@clerk/nextjs'
import { InfoIcon, StepBack } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {

  const pathname = usePathname()
  const router = useRouter()

  const isWhiteboard = pathname.includes("/whiteboard");

  return (
    <>
    {
      !isWhiteboard ? (
        <div className='w-full border-b py-4 h-[60px] px-7 flex items-center justify-end bg-background gap-6'>
          <Link target='_blank' href={"/showcase/features"} className='flex items-center gap-1 text-xs font-medium hover:underline underline-offset-2 transition'><InfoIcon size={15}/>{"Features!"}</Link>
          <UserButton afterSignOutUrl='/signin' />
        </div>
      ) : (
        <div className='w-full border-b py-4 h-[60px] px-7 flex items-center justify-between bg-background gap-6'>
          <div className='flex items-center gap-5'>
            <h2 className='font-semibold'>Whiteboard</h2>
          </div>

          <div className='flex items-center gap-6'>
            <Button variant={"outline"} size={"sm"} className='text-xs' onClick={() => {router.back()}}>
              Back to workspace
            </Button>
            <Link target='_blank' href={"/showcase/features"} className='flex items-center gap-1 text-xs font-medium hover:underline underline-offset-2 transition'><InfoIcon size={15}/>{"Features!"}</Link>
            <UserButton afterSignOutUrl='/signin' />
          </div>
        </div>
      )
    }
    </>
  )
}

export default Navbar