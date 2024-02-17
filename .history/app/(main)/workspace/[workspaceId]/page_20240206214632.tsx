"use client"

import { usePathname } from 'next/navigation'
import React from 'react'

const WorkspaceIdPage = () => {

  const pathname = usePathname()
  console.log(pathname.trimStart('/workspace'))

  return (
    <div>WorkspaceIdPage</div>
  )
}

export default WorkspaceIdPage