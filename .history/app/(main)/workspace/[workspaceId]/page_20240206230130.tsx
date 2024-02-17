"use client"


import { useSearchParams } from 'next/navigation'
import React from 'react'


const WorkspaceIdPage = () => {


  if(!workspaceId) return (
    <div>No Workspace</div>
  );
  

  return (
    <div>
      hello
    </div>
  )
}

export default WorkspaceIdPage