"use client"

import { Draw, useDraw } from '@/hooks/useDraw';
import React, { useLayoutEffect, useRef, useState } from 'react'
import rough from 'roughjs';
import { CirclePicker, GithubPicker, SketchPicker, TwitterPicker } from 'react-color';
import ToolBar from '../../_components/toolbar';


const WhiteboardPage = () => {

    const [color,setColor] = useState<string>("#fff")

    const {canvasRef, onMouseDown,clear} = useDraw(drawLine)

    function drawLine({prevPoint,currentPoint,ctx}:Draw) {
        const {x: currX, y:currY} = currentPoint;
        const lineColor = color;
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
            <div className='absolute bottom-5 left-[50%] translate-x-[-50%]'>
                <TwitterPicker className='w-96' onChange={c => setColor(c.hex)}/>
            </div>
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