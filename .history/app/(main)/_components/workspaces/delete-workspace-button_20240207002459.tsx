"use client"

import { deleteWorkspaceInDB } from '@/actions/delete-workspace'
import { Button } from '@/components/ui/button'
import React from 'react'

const DeleteWorkspaceBtn = ({workspaceId}:{workspaceId:string}) => {

    const onDeleteClick = () => {
        deleteWorkspaceInDB(workspaceId)
      }

  return (
    <Button variant={"outline"} onClick={onDeleteClick} className="text-red-500">
        Delete workspace
    </Button>
  )
}

export default DeleteWorkspaceBtn