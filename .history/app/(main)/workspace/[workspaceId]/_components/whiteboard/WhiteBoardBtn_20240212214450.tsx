import { CircuitBoard } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const WhiteBoardBtn = ({workspaceId} : {workspaceId : string}) => {
  return (
    <Link href={`/workspace/${workspaceId}/kanban`} className='p-4 h-40 w-48 flex flex-col gap-3 items-center justify-center rounded-lg border bg-neutral-900'>
      <CircuitBoard size={27}/>
      <h2 className="font-semibold text-xl">Kanban Board</h2>
    </Link>
  )
}

export default WhiteBoardBtn