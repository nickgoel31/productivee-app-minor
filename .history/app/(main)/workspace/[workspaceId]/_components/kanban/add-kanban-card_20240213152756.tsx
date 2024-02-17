"use client"

import { addTaskInDB } from '@/actions/tasks/add-task'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
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
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import React, { FormEvent, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required"
    })
})



const AddCard = ({workspaceId} : {workspaceId:string}) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
      }


  return (
    <Dialog>
        <DialogTrigger>
            <Button className='' variant={"outline"}>Add a new task +</Button>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Add a new task
                </DialogTitle>
                <DialogDescription>by clicking add you will be able to create a new task.</DialogDescription>
            </DialogHeader>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                            <Input autoFocus placeholder="eg- make a navbar" {...field} />
                        </FormControl>
                        <FormDescription>
                            This is your public display name.
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <div className='w-full flex items-center justify-end'>
                        <DialogClose className=''>
                            <Button type='submit'>Add task</Button>
                        </DialogClose>
                    </div>
                </form>
            </Form>
            
        </DialogContent>
    </Dialog>
  )
}

export default AddCard