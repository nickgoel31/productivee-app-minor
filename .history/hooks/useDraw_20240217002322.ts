import { useEffect, useRef, useState } from "react"

export const useDraw = () => {
    const [draw, setDraw] = useState(false)

    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {

        const handler = (e: MouseEvent) => {
            const currentPoint = computePointInCanvas(e)

            console.log({x: currentPoint?.x, y: currentPoint?.y})
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