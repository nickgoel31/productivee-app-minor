"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const ShowcasePage = () => {

  return (
    <div className='w-full py-8 flex flex-col items-center justify-center h-[calc(65vh)] text-center gap-4 relative'>

      <span className='bg-background border border-red-500 absolute w-[60vw] translate-y-[120%] h-64 z-[-8]'></span>
      <span className='w-96 h-96 rounded-full bg-foreground/50 absolute z-[-10] blur-[100px]'></span>

      <h1 className='font-bold text-5xl'>All your tasks in one place</h1>
      <p className='font-medium text-muted-foreground '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eaque vitae doloremque architecto.</p>
      <Button className='rounded-lg mt-2' asChild>
        <Link href={"/sign-up"}>
          Get started
        </Link>
      </Button>
    </div>
  )
}

export default ShowcasePage