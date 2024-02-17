"use client"

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const ShowcasePage = () => {

  return (
    <div className='w-full py-8 flex flex-col items-center justify-center h-[calc(85vh)] text-center gap-4 '>
      <h1 className='font-bold text-5xl'>All your tasks in one place</h1>
      <p className='font-medium text-muted-foreground '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eaque vitae doloremque architecto.</p>
      <Button className='rounded-sm'>Get started</Button>
    </div>
  )
}

export default ShowcasePage