"use client"

import React, { useLayoutEffect, useRef, useState } from 'react'
import rough from 'roughjs';

const generator = rough.generator();

function createElement (x1:number,y1:number,x2:number,y2:number) {
    const roughElement = generator.line(x1,y1,x2,y2)

    return {x1,y1,x2,y2}
}

const WhiteboardPage = () => {

    const [elements, setElements] = useState([]);
    const [isDrawing, setIsDrawing] = useState(false)

    const canvasRef = useRef<HTMLCanvasElement>(null)

    useLayoutEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas) return;

        const ctx= canvas?.getContext("2d")
        if(!ctx) return;

        ctx.clearRect(0,0,canvas?.width, canvas?.height)


        const rc = rough.canvas(canvas);
        if(!rc) return;
        
        const rect = generator.rectangle(10, 10, 100, 100);
        const line = generator.line(10, 10, 110, 110);
        rc.draw(rect)
        rc.draw(line)
        
    })

    const handleMouseDown = (e:React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        setIsDrawing(true);

        const {clientX, clientY} = e

        const element = createElement(clientX,clientY,clientX, clientY);
        setElements(prevState => [...prevState, element])
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
        <div className='overflow-hidden overflow-y-hidden w-full h-full bg-neutral-200'>
            <canvas 
            ref={canvasRef}
            id="canvas"
            width={window.innerWidth}
            height={window.innerHeight}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            />
        </div>
    );
}

export default WhiteboardPage