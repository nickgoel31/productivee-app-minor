import { usePathname } from 'next/navigation'
import React from 'react'

const WorkspaceIdPage = () => {

  const pathname = usePathname()

  return (
    <div>WorkspaceIdPage</div>
  )
}

export default WorkspaceIdPage