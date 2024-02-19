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

    useEffect(() => {

        const handler = (e:MouseEvent) => {
            const ctx = canvasRef.current?.getContext('2d')
            if(!ctx) return;
            
        }


        //ADD EVENT LISTENER
        canvasRef.current?.addEventListener('mousemove',handler)

        //REMOVE EVENT LISTENER
        return () => canvasRef.current?.addEventListener('mousemove',handler)
    },[])

    return { canvasRef, onMouseDown};
};
