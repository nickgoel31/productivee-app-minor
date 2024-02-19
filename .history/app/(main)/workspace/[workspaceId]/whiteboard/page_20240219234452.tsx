"use client"

import React from 'react';
import Canvas from '../_components/whiteboard/whitboard-canvas';
import { useDraw } from '@/hooks/useDraw';

const WhiteBoardPage = () => {

    return (
        <div className='w-full h-full lg:pr-10 pr-0'>
            <canvas 
            id="canvas"
            className='border rounded-md h-full w-full'
            />
        </div>
    );
};

export default WhiteBoardPage;
