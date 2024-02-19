"use client"

import React, { useLayoutEffect, useRef, useState } from 'react'
import rough from 'roughjs';

const generator = rough.generator();

const WhiteboardPage = () => {

    const [elements, setElements] = useState([]);
    const [isDrawing, setIsDrawing] = useState(false)

    const canvasRef = useRef<HTMLCanvasElement>(null)

    useLayoutEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas) return;
        const rc = rough.canvas(canvas);

        if(!rc) return;
        
        const rect = generator.rectangle(10, 10, 100, 100);
        const line = generator.line(10, 10, 110, 110);
        rc.draw(rect)
        rc.draw(line)
        
    })

    const handleMouseDown = (e:React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        setIsDrawing(true);
    }


    const handleMouseUp = (e:React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        setIsDrawing(false);
    }

    const handleMouseMove = (e:React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        if(!isDrawing) return;
        const {clientX, clientY} = e
        console.log({x: clientX, y:clientY})
    }

    return (
        <div className='overflow-hidden overflow-y-hidden w-full h-full '>
            <canvas 
            ref={canvasRef}
            id="canvas"
            width={window.innerWidth}
            height={window.innerHeight}
            onMouseDown={e => handleMouseDown}
            onMouseMove={e => handleMouseMove}
            onMouseUp={e => handleMouseUp}
            />
        </div>
    );
}

export default WhiteboardPage