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

export const useDraw = (onDraw: ({ ctx, currentPoint, prevPoint }: Draw) => void) => {
    const [draw, setDraw] = useState(false);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const prevPoint = useRef<null | Point>(null);

    const onMouseDown = () => {
        setDraw(true);
    };
    const onMouseUp = () => {
        setDraw(false);
    };

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (!draw) return;

            const currentPoint = computePointInCanvas(e);

            const ctx = canvasRef.current?.getContext("2d");
            if (!ctx || !currentPoint) return;

            onDraw({ ctx, currentPoint, prevPoint: prevPoint.current });
            prevPoint.current = currentPoint;
        };

        const computePointInCanvas = (e: MouseEvent) => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            return { x, y };
        };

        //ADD EVENT LISTENERS
        canvasRef.current?.addEventListener("mousemove", handler);

        //REMOVE EVENT LISTENERS
        return () => canvasRef.current?.removeEventListener("mousemove", handler);
    }, [draw]); // Include draw in dependency array

    return { canvasRef, onMouseDown, onMouseUp };
};
