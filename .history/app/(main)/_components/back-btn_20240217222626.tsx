"use client"

import { Button } from '@/components/ui/button'
import { StepBack } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const BackBtn = () => {
    const router = useRouter()

  return (
    <Button onClick={() => router.back()} variant={"outline"} className='hidden lg:flex'>
        <StepBack size={16} className='mr-1'/> 
        Go back
    </Button>
  )
}

export default BackBtn