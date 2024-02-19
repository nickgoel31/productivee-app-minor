"use client"

import React, { useLayoutEffect, useRef } from 'react'

const WhiteboardPage = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useLayoutEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext(`2d`);

        if(!ctx) return;

        ctx.fillStyle = "green";
        ctx.fillRect(10,10, 150, 100);
    })

    return (
        <div className='overflow-hidden overflow-y-hidden bg-white'>
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