import { CircuitBoard, Presentation } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const WhiteBoardBtn = ({workspaceId} : {workspaceId : string}) => {
  return (
    <Link href={`/whiteboard/${workspaceId}`} className='p-4 h-40 lg:w-48 w-full flex flex-col gap-3 items-center justify-center rounded-lg border bg-neutral-900 hover:text-green-500 hover:border-green-500 transition'>
      <Presentation size={29}/>
      <h2 className="font-semibold text-xl">Whiteboard</h2>
    </Link>
  )
}

export default WhiteBoardBtn