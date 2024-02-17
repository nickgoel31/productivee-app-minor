import { useEffect, useRef, useState } from "react"

export const useDraw = () => {
    const [draw, setDraw] = useState(false)

    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {

        const handler = (e: MouseEvent) => {
            console.log({x: e.clientX, y: e.clientY})
        }


        //ADD EVENT LISTENERS
        canvasRef.current?.addEventListener("mousemove",handler)

        return () => canvasRef.current?.addEventListener("mousemove",handler)
    },[])

    return {canvasRef}
}