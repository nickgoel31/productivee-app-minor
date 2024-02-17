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

const EditLegacyTask = () => {
  return (
    <div>
        <DialogTrigger>
            <Edit size={17} />
        </DialogTrigger>
    </div>
  )
}

export default EditLegacyTask