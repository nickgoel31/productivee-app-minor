"use client"
import { Edit } from 'lucide-react'
import React from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const EditLegacyTask = ({taskName,taskId}:{taskName:string, taskId:string}) => {
  return (
    <Dialog>
        <DialogTrigger>
            <Edit size={17} />
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit task "{taskName}"</DialogTitle>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default EditLegacyTask