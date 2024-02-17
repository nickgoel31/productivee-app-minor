"use client"

import { Plus } from 'lucide-react'
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
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"



const formSchema = z.object({
  title: z.string().min(2, {
    message: "Subtask can't be empty"
  }).max(50),
})


const NewSubtask = () => {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

  return (
    <Dialog>
        <DialogTrigger>
            <div className='w-full py-1 flex gap-1 items-center justify-center text-xs font-medium text-neutral-400 hover:text-neutral-100 transition-all cursor-pointer'>
                Add a new subtask
                <Plus size={14}/>
            </div>
        </DialogTrigger>

        <DialogContent className='w-full  flex flex-col'>
            <Form {...form}>
                <DialogHeader>
                    <DialogTitle>
                        Add a new subtask
                    </DialogTitle>
                    <DialogDescription>
                        New subtask will be created.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Input placeholder="eg- make a navbar" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                <div className='w-full flex items-center justify-end mt-1'>
                    <DialogClose disabled className=''>
                        <Button>
                            Add
                        </Button>
                    </DialogClose>
                </div>
            </form>
        </Form>
        </DialogContent>
    </Dialog>
  )
}

export default NewSubtask