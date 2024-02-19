"use client"

import React, { useLayoutEffect, useRef } from 'react';
import Canvas from '../_components/whiteboard/whitboard-canvas';
import { useDraw } from '@/hooks/useDraw';

const WhiteBoardPage = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null)

    useLayoutEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext(`2d`);

        if(!ctx) return;

        ctx.fillStyle = "green";
        ctx.fillRect(10,10, 150, 100);
    })

    return (
        <div className='w-full h-full lg:pr-10 pr-0'>
            <canvas 
            ref={canvasRef}
            id="canvas"
            width={1000}
            height={1000}
            className='border rounded-md h-full w-full'
            />
        </div>
    );
};

export default WhiteBoardPage;
