"use client"

import { useEffect, useRef, useState } from "react";

export interface Draw {
    ctx: CanvasRenderingContext2D;
    currentPoint: Point;
    prevPoint: Point | null;
}

type Point = {
    x: number;
    y: number;
};

export const useDraw = (onDraw: ({ctx,currentPoint,prevPoint}:Draw) => void) => {
    const [isDrawing,setIsDrawing] = useState(false)
    const [mouseDown,setMouseDown] = useState(false)

    const canvasRef = useRef<HTMLCanvasElement>(null)
    const prevPoint = useRef<null | Point>(null);

    const onMouseDown = () => setMouseDown(true);

    const clear = () => {
        const canvas = canvasRef.current
        if(!canvas) return;

        const ctx = canvas.getContext("2d");
        if(!ctx) return;

        ctx.clearRect(0,0,canvas.width,canvas.height)
    }

    useEffect(() => {

        const handler = (e:MouseEvent) => {
            if(!mouseDown) return;
            const x = e.clientX;
            const y = e.clientY
            const currentPoint = {x,y}

            const ctx = canvasRef.current?.getContext('2d')
            if(!ctx || !currentPoint) return;

            onDraw({ctx, currentPoint,prevPoint: prevPoint.current})
            prevPoint.current = currentPoint;
            
        }

        const mouseUpHandler = () => {
            setMouseDown(false);
            prevPoint.current = null
        }


        //ADD EVENT LISTENER
        canvasRef.current?.addEventListener('mousemove',handler)
        window.addEventListener('mouseup', mouseUpHandler)

        //REMOVE EVENT LISTENER
        return () => {
            canvasRef.current?.removeEventListener('mousemove',handler);
            window.removeEventListener('mouseup', mouseUpHandler)
        }
    },[onDraw])

    return { canvasRef, onMouseDown};
};
