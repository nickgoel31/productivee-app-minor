"use client"

import { Draw, useDraw } from '@/hooks/useDraw';
import React, { useLayoutEffect, useRef, useState } from 'react'
import rough from 'roughjs';
import ToolBar from '../../_components/toolbar';


const WhiteboardPage = () => {

    const {canvasRef, onMouseDown,clear} = useDraw(drawLine)

    function drawLine({prevPoint,currentPoint,ctx}:Draw) {
        const {x: currX, y:currY} = currentPoint;
        const lineColor = "#fff";
        const lineWidth = 5;

        let startPoint = prevPoint ?? currentPoint;

        ctx.beginPath()
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = lineColor;
        ctx.moveTo(startPoint.x,startPoint.y)
        ctx.lineTo(currX,currY)
        ctx.stroke()

        ctx.fillStyle = lineColor;
        ctx.beginPath()
        ctx.arc(startPoint.x,startPoint.y, 2, 0, 2 * Math.PI)
        ctx.fill()

    }

    return (
        <div className='overflow-hidden overflow-y-hidden w-full h-full bg-background relative'>
            <ToolBar clear={clear}/>
            <canvas 
            ref={canvasRef}
            id="canvas"
            width={window.innerWidth}
            height={window.innerHeight}
            onMouseDown={onMouseDown}
            
            />
        </div>
    );
}

export default WhiteboardPage