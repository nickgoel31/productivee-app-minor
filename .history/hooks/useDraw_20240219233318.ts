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

export const useDraw = () => {
    
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {

        const handler = (e:MouseEvent) => {
            console.log(e.clientX, e.clientY)
        }


        //ADD EVENT LISTENER
        canvasRef.current?.addEventListener('mousemove',handler)
    },[])

    return { canvasRef};
};
