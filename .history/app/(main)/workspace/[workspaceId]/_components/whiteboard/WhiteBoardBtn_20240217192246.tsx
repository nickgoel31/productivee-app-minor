import { CircuitBoard, Presentation } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const WhiteBoardBtn = ({workspaceId} : {workspaceId : string}) => {
  return (
    <div className='p-4 h-40 w-48 flex flex-col gap-3 items-center justify-center rounded-lg border bg-neutral-900  transition opacity-40'>
      <Presentation size={29}/>
      <h2 className="font-semibold text-xl">Whiteboard</h2>
    </div>
  )
}

export default WhiteBoardBtn