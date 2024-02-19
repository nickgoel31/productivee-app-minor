"use client"

import React, { useLayoutEffect, useRef } from 'react'
import rough from 'roughjs';

const generator = rough.generator();

const WhiteboardPage = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useLayoutEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas) return;
        const rc = rough.canvas(canvas);

        if(!rc) return;
        const rect = generator.rectangle(10, 10, 100, 100);
        
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