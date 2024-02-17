import { useEffect, useRef, useState } from "react"

interface Draw {
    ctx: CanvasRenderingContext2D;
    currentPoint: Point
    prevPoint: Point | null
}

type Point = {
    x: number;
    y:number;
}

export const useDraw = (onDraw: ({ctx,currentPoint,prevPoint}:Draw) => void) => {

    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {

        const handler = (e: MouseEvent) => {
            const currentPoint = computePointInCanvas(e)

            const ctx = canvasRef.current?.getContext('2d')

            if(!ctx || !currentPoint) return;




            console.log({x: currentPoint.x, y: currentPoint.y})
        }

        const computePointInCanvas = (e:MouseEvent) => {
            const canvas = canvasRef.current
            if(!canvas) return

            const rect= canvas.getBoundingClientRect()
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top; 

            return {x,y}
        }


        //ADD EVENT LISTENERS
        canvasRef.current?.addEventListener("mousemove",handler)

        //REMOVE EVENT LISTENERS
        return () => canvasRef.current?.addEventListener("mousemove",handler)
    },[])

    return {canvasRef}
}