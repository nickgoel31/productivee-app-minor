"use client"

import { getWorkspace } from '@/actions/get-workspace'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const WorkspaceIdPage = () => {

  const router = useSearchParams()
  const workspaceId = router.get("id")

  if(workspaceId){
    const {} = getWorkspace(workspaceId)
  }

  return (
    <div>WorkspaceIdPage</div>
  )
}

export default WorkspaceIdPage