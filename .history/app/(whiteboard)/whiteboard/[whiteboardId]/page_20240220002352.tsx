"use client"

import { useDraw } from '@/hooks/useDraw';
import React, { useLayoutEffect, useRef, useState } from 'react'
import rough from 'roughjs';


const WhiteboardPage = () => {


    const {canvasRef} = useDraw()

    return (
        <div className='overflow-hidden overflow-y-hidden w-full h-full bg-neutral-200'>
            <canvas 
            ref={canvasRef}
            id="canvas"
            width={window.innerWidth}
            height={window.innerHeight}
            
            />
        </div>
    );
}

export default WhiteboardPage