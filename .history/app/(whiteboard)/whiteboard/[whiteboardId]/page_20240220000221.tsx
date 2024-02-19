"use client"

import React, { useLayoutEffect, useRef } from 'react'
import rough from 'roughjs';

const WhiteboardPage = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useLayoutEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas) return;
        const rc = rough.canvas(canvas);

        if(!rc) return;
        rc.rectangle(10, 10, 200, 200);
        
    })

    return (
        <div className='overflow-hidden overflow-y-hidden w-full h-full bg-white'>
            <canvas 
            ref={canvasRef}
            id="canvas"
            width={window.innerWidth}
            height={window.innerHeight}
            className='border rounded-md'
            />
        </div>
    );
}

export default WhiteboardPage