"use client"

import React from 'react';
import Canvas from '../_components/whiteboard/whitboard-canvas';
import { useDraw } from '@/hooks/useDraw';

const WhiteBoardPage = () => {

    const {canvasRef} = useDraw()

    return (
        <div className='w-full h-full lg:pr-10 pr-0'>
            <canvas 
            ref={canvasRef}
            width={window.innerWidth}
            className='border rounded-md'
            />
        </div>
    );
};

export default WhiteBoardPage;
