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
        const lineColor = "#fff"
        const lineWidth = 5

        let startPoint = prevPoint ??  currentPoint;
        ctx.beginPath()
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = lineColor;
        ctx.moveTo(startPoint.x,startPoint.y)
        ctx.lineTo(currX,currY);
        ctx.stroke()

        ctx.fillStyle = lineColor;
        ctx.beginPath()
        ctx.arc(startPoint.x,startPoint.y, 2, 0, 2 * Math.PI)
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