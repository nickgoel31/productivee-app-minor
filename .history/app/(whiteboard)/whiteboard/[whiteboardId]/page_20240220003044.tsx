"use client"

import { Draw, useDraw } from '@/hooks/useDraw';
import React, { useLayoutEffect, useRef, useState } from 'react'
import rough from 'roughjs';


const WhiteboardPage = () => {

    const {canvasRef} = useDraw(drawLine)

    function drawLine({prevPoint,currentPoint,ctx}:Draw) {
        const {x: currX, y:currY} = currentPoint;
        const lineColor = "#fff";
        const lineWidth = 5;

        let startPoint = prevPoint ?? currentPoint;

        ctx.beginPath()
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = lineColor;
        ctx.moveTo(startPoint.x,startPoint.y)
    }

    return (
        <div className='overflow-hidden overflow-y-hidden w-full h-full bg-neutral-200'>
            <canvas 
            ref={canvasRef}
            id="canvas"
            width={window.innerWidth}
            height={window.innerHeight}
            
            />
        </div>
    );
}

export default WhiteboardPage