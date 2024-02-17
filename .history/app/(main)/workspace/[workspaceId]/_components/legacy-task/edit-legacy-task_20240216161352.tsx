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

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const LegacyTaskSchema = z.object({
    title: z.string().min(1,{
        message:"Title is required"
    })
})

const EditLegacyTask = ({taskName,taskId}:{taskName:string, taskId:string}) => {

    const form = useForm<z.infer<typeof LegacyTaskSchema>>({
        resolver: zodResolver(LegacyTaskSchema),
        defaultValues: {
            title: taskName
        }
    })

    const {isValid} = form.formState;

    const onSubmit = (values: z.infer<typeof LegacyTaskSchema>) => {
        // addSubTaskInDB(values, taskId)
    }

  return (
    <Dialog>
        <DialogTrigger>
            <Edit size={17} />
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit task "{taskName}"</DialogTitle>
            </DialogHeader>

            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-1">
                
                <FormField
                control={form.control}
                name='title'
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                            <Input
                                type="text"
                                placeholder="eg- Buy milk"
                                {...field}
                            />
                        </FormControl>
                    </FormItem>
                )}
                />

                <Button className="w-fit mt-3" type="submit">
                    <DialogClose disabled={!isValid}>Edit task</DialogClose>
                </Button>
            </form>
          </Form>
        </DialogContent>
    </Dialog>
  )
}

export default EditLegacyTask