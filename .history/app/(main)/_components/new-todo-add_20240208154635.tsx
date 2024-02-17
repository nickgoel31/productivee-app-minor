"use client"

import { cn } from '@/lib/utils';
import { Plus, XIcon } from 'lucide-react';
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { addTodoInDB } from '@/actions/add-todo';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';

interface NewTodoFormData {
  title: string;
}


const NewTodoAdd = ({workspaceId} : {workspaceId:string}) => {
  const [formData, setFormData] = useState<NewTodoFormData>({ title: '' });
  const [dialog, setDialog] = useState(true)


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmitForm = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Access validated and typed form data here
    const { title } = formData;

    // Submit your form data and handle the response
    addTodoInDB(title,workspaceId)

    // Reset the form
    setFormData({ title: '' });

    setDialog(false);
  };

  return (
    <div className="flex items-center justify-between border border-dashed rounded-md w-[600px] overflow-hidden cursor-pointer group">
      <AlertDialog>
        <AlertDialogTrigger onClick={() => setDialog(true)} className="w-full px-4 py-4">
          <div className="flex items-center gap-1 justify-center w-full text-neutral-500 group-hover:text-neutral-50 transition text-center">
            <h2 className={cn('font-medium text-lg line-clamp-1')}>Add a todo</h2>
            <Plus />
          </div>
        </AlertDialogTrigger>

        <AlertDialogContent className=''>
          <AlertDialogHeader>
            <AlertDialogTitle>Add a Todo</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>  

          <AlertDialogCancel className='absolute top-2 right-3 border-none p-0 m-0'><XIcon /></AlertDialogCancel>

          <form onSubmit={onSubmitForm} className="flex flex-col gap-1">
            <p className="text-sm font-medium ml-1">Title</p>
            <Input
              type="text"
              name="title" // Name the input for easier access
              placeholder="eg- Buy milk"
              value={formData.title} // Controlled input
              onChange={handleInputChange}
            />
            <Button className="w-fit mt-3" type="submit">
              <AlertDialogAction>Add to the list</AlertDialogAction>
            </Button>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default NewTodoAdd;
