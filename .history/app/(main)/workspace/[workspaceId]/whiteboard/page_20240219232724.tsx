"use client"

import React from 'react';
import Canvas from '../_components/whiteboard/whitboard-canvas';

const WhiteBoardPage = () => {
    return (
        <div className='w-full h-full lg:pr-10 pr-0'>
            <canvas 
            width={750}
            height={750}
            className='border rounded-md'
            />
        </div>
    );
};

export default WhiteBoardPage;
