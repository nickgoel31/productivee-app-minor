"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle } from 'lucide-react';

const editTaskSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required."
    }),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]).optional()
})

const EditKanbanCardForm = ({prevTitle}:{prevTitle:string}) => {

    const form = useForm<z.infer<typeof editTaskSchema>>({
        resolver: zodResolver(editTaskSchema),
        defaultValues: {
            title: prevTitle,
            description:"",
            tags: [],
        }
    })

    const {isValid} = form.formState;

    const handleEditTaskSubmit = (values: z.infer<typeof editTaskSchema>) => {
        //
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(handleEditTaskSubmit)} className='space-y-4'>
            <FormField
                control={form.control}
                name="title"
                defaultValue={prevTitle}
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                            <Input type='text' placeholder='eg- make a new navbar' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="description"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Description <span className='text-sm text-muted-foreground'>(optional)</span></FormLabel>
                        <FormControl>
                            <Textarea placeholder='describe your task...' className='max-h-32' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="tags"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Tags</FormLabel>
                        <FormControl>
                            <div className='border h-10 px-2 w-full rounded flex items-center gap-3'>
                                <div className='border rounded hover:bg-neutral-400/10 cursor-pointer transition py-1.5 px-3 flex gap-1 text-xs items-center text-muted-foreground'>
                                    Add
                                    <PlusCircle size={13} className='text-neutral-6000'/>
                                </div>
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />


            <div className='w-full flex items-center justify-end mt-4'>
                <DialogClose disabled={!isValid}>
                    <Button type='submit'>Add task</Button>
                </DialogClose>
            </div>
        </form>
    </Form>
  )
}

export default EditKanbanCardForm