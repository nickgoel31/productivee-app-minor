import { deleteWorkspaceInDB } from '@/actions/delete-workspace'
import React from 'react'

const DeleteWorkspaceBtn = ({workspaceId}:{workspaceId:string}) => {

    const onDeleteClick = () => {
        deleteWorkspaceInDB(workspaceId)
      }

  return (
    <div>DeleteWorkspaceBtn</div>
  )
}

export default DeleteWorkspaceBtn