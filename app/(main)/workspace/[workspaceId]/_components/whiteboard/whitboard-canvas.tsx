"use client"

import React from 'react';
import { Draw, useDraw } from '@/hooks/useDraw';

const Canvas = () => {
    const { canvasRef, onMouseDown, onMouseUp } = useDraw(drawLine);

    function drawLine({ prevPoint, currentPoint, ctx }: Draw) {
        const { x: currX, y: currY } = currentPoint;
        const lineColor = "#ffffff";
        const lineWidth = 20;

        let startPoint = prevPoint ?? currentPoint;
        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = lineColor;
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(currX, currY);
        ctx.stroke();

        ctx.fillStyle = lineColor;
        ctx.beginPath();
        ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
        ctx.fill();
    }

    return (
        <div className='w-full h-full'>
            <canvas
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                ref={canvasRef}
                width={800} // Set canvas width as number
                height={600} // Set canvas height as number
                className='w-full h-full z-[8] whiteboard-canvas'
            />
        </div>
    );
};

export default Canvas;
