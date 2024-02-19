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

    return { canvasRef};
};
