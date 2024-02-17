"use client"

import { getWorkspace } from '@/actions/get-workspace'
import { getWorkspaceById } from '@/data/workspaces'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const WorkspaceIdPage = () => {

  const router = useSearchParams()
  const workspaceId = router.get("id")

  if(!workspaceId) return null;

  // const {name,} = getWorkspaceById(workspaceId)

  return (
    <div>{workspace}</div>
  )
}

export default WorkspaceIdPage