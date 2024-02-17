"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'


const WorkspaceIdPage = () => {

  const router = useSearchParams()
  const workspaceId = router.get("id")

  if(!workspaceId) return null;
  

  return (
    <div>
      hello
    </div>
  )
}

export default WorkspaceIdPage