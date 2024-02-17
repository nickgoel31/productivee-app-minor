import { useEffect, useRef, useState } from "react"

export const useDraw = () => {
    const [draw, setDraw] = useState(false)

    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        
    },[])

    return {canvasRef}
}