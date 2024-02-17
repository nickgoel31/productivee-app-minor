"use client"

import { useDraw } from '@/hooks/useDraw'
import React from 'react'

interface Draw {
    ctx: CanvasRenderingContext2D;
    currentPoint: Point
    prevPoint: Point | null
}

type Point = {
    x: number;
    y:number;
}

const Canvas = () => {

    const {canvasRef} = useDraw(drawLine)

    function drawLine({prevPoint,currentPoint,ctx}:Draw) {
        const {x: currX, y: currY} = currentPoint;
        const color = "#fff"
        const lineWidth = 5

        let startPoint = prevPoint ??  currentPoint;
    }

  return (
    <div className='w-full h-full'>
        <canvas
        ref={canvasRef}
        width={"100%"}
        height={"100%"}
        className='w-full h-full bg-neutral-900/10 whiteboard-canvas'
        />
    </div>
  )
}

export default Canvas