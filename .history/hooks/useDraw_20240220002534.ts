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
            const ctx = canvasRef.current?.getContext('2d')
            if(!ctx) return;

            ctx.fillStyle = "green";
            ctx?.fillRect(10,10,200,200)
        }


        //ADD EVENT LISTENER
        canvasRef.current?.addEventListener('mousemove',handler)

        //REMOVE EVENT LISTENER
        return () => canvasRef.current?.addEventListener('mousemove',handler)
    },[])

    return { canvasRef};
};
