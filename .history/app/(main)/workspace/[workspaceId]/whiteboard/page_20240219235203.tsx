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
        <canvas 
            ref={canvasRef}
            id="canvas"
            width={window.outerWidth}
            height={window.innerHeight}
            className=''
        />
    );
};

export default WhiteBoardPage;