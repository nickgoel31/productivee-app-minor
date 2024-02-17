"use client"

import { usePathname } from 'next/navigation'
import React from 'react'

const WorkspaceIdPage = () => {

  const pathname = usePathname()
  console.log(pathname)

  return (
    <div>WorkspaceIdPage</div>
  )
}

export default WorkspaceIdPage