"use client"

import React, { useRef } from 'react';
import { Draw, useDraw } from '@/hooks/useDraw';

interface Props{
    props:any;
}

const Canvas = ({props}:Props) => {
    const canvasRef = useRef()
    return (
        <canvas ref={canvasRef} className='w-full h-full' {...props}/>
    );
};

export default Canvas;
