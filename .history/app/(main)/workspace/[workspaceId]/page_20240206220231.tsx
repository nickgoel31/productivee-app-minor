"use client"

import { getWorkspace } from '@/actions/get-workspace'
import { getWorkspaceById } from '@/data/workspaces'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import WorkspaceIdContent from '../../_components/workspaces/workspace-id-content'

const WorkspaceIdPage = () => {

  const router = useSearchParams()
  const workspaceId = router.get("id")

  if(!workspaceId) return (
    <div>COULD NOT FIND THE WROKSPACE</div>
  );


  return (
    <div>
      hello
    </div>
  )
}

export default WorkspaceIdPage