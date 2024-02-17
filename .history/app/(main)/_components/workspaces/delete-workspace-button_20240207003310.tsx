"use client"

import { deleteWorkspaceInDB } from '@/actions/delete-workspace'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const DeleteWorkspaceBtn = ({workspaceId}:{workspaceId:string}) => {
    const router = useRouter()

    const onDeleteClick = () => {
        deleteWorkspaceInDB(workspaceId)
        setTimeout(() => {
            router.refresh()
            router.push("/workspace")
        },2000)
    }

  return (
    <Button variant={"outline"} onClick={onDeleteClick} className="text-red-500">
        Delete workspace
    </Button>
  )
}

export default DeleteWorkspaceBtn