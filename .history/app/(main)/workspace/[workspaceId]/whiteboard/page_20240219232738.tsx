"use client"

import React from 'react';
import Canvas from '../_components/whiteboard/whitboard-canvas';

const WhiteBoardPage = () => {
    return (
        <div className='w-full h-full lg:pr-10 pr-0'>
            <canvas 
            
            className='border rounded-md w-full h-full'
            />
        </div>
    );
};

export default WhiteBoardPage;
