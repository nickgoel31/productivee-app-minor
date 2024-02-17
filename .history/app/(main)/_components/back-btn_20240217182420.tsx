"use client"

import { Button } from '@/components/ui/button'
import { StepBack } from 'lucide-react'
import React from 'react'

const BackBtn = () => {
  return (
    <Button variant={"outline"}>
        <StepBack size={16} className='mr-1'/> 
        Go back
    </Button>
  )
}

export default BackBtn