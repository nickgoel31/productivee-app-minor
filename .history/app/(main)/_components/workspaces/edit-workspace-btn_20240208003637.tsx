"use client"


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import React from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { WorkspaceEditProps} from "@/types"
import { Input } from '@/components/ui/input'
import DeleteWorkspaceBtn from './delete-workspace-button'
import { formatDate } from '@/helpers/format-date'
  

const formSchema = z.object({
    name: z.string().min(1,{
        message: "Please enter a workspace name",
    }),
    description:z.string().optional()
  })

const EditWorkspaceBtn = ({name,id,description,createdAt}:WorkspaceEditProps) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name,
          description: description || "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }


  return (
    <Dialog>
        <DialogTrigger>
            <Button variant={"outline"} className="">
            Edit workspace
            </Button>
        </DialogTrigger>

        <DialogContent className='w-full'>
            <DialogHeader>
            <DialogTitle>Edit Workspace</DialogTitle>
            <DialogDescription>
                You can edit workspace here.
            </DialogDescription>
            </DialogHeader>

            <div className='space-y-6 w-full'>
                {/* TODO EDIT NAME */}
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-sm font-medium ml-1">Workspace Name</FormLabel>
                        <FormControl>
                            <Input placeholder="eg- lutune ai" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-sm font-medium ml-1">Description</FormLabel>
                        <FormControl>
                            <Input placeholder="eg- an ai app" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </form>
                </Form>


                <div className='items-center justify-between flex w-full'>
                    <div className='space-y-1'>
                        <label htmlFor="createdAt" className='text-sm font-medium ml-1'>Created on</label>
                        <p className='text-xs font-medium text-neutral-400 ml-1'>{formatDate(createdAt)}</p>
                    </div>
                    <DialogClose className=''>
                        <Button>Save Changes</Button>
                    </DialogClose>
                </div>



                <div className='p-3 px-5 border-2 rounded-lg border-dashed border-destructive'>
                    <h3 className='font-semibold text-destructive dark:text-red-500 mb-1'>Danger zone</h3>
                    <p className='text-sm text-neutral-400 mb-3'>This action can't be  undone.</p>
                    <DeleteWorkspaceBtn workspaceId={id}/>
                </div>
            </div>


        </DialogContent>
    </Dialog>
  )
}

export default EditWorkspaceBtn