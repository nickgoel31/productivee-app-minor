"use client"

import useWorkspace from '@/hooks/useWorkspace'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'


const WorkspaceIdPage = () => {

  const router = useSearchParams()
  const workspaceId = router.get("id")

  if(!workspaceId) return null;
  
  const workspace = useWorkspace(workspaceId)

  return (
    <div>
      hello
    </div>
  )
}

export default WorkspaceIdPage