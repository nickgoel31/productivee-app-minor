"use client"

import React from 'react'
import Canvas from '../_components/whiteboard/whitboard-canvas'
import { useDraw } from '@/hooks/useDraw'

const WhiteBoardPage = () => {

    const {canvasRef} = useDraw()

  return (
    <div className='w-full h-full'>
        <canvas
        ref={canvasRef}
        width={"100%"}
        height={"100%"}
        className='w-full h-full bg-neutral-900/10 whiteboard-canvas'
        />
        {/* <Canvas /> */}
    </div>
  )
}

export default WhiteBoardPage