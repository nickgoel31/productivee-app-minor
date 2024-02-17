import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const newSubTaskSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required to create a task!"
    })
})

const AddKanbanSubtaskCard = ({taskId}:{taskId:string}) => {

    const form = useForm<z.infer<typeof newSubTaskSchema>>({
        resolver: zodResolver(newSubTaskSchema),
        defaultValues: {
            title: ""
        }
    })

    const {isValid} = form.formState;

    const handleNewSubTaskSubmit = (values: z.infer<typeof newSubTaskSchema>) => {
        // addSubTaskInDB(values, taskId)
    }

  return (
    <Dialog>
        <DialogTrigger>
            <div className='cursor-pointer py-1 hover:bg-neutral-500/10 transition w-full text-sm font-medium text-neutral-300 items-center flex justify-center'>
            Add a subtask +
            </div>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add a subtask</DialogTitle>
                <DialogDescription>
                    By clicking add button below, you'll add a subtask to your task!
                </DialogDescription>
            </DialogHeader>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleNewSubTaskSubmit)}>
                    <FormField
                    control={form.control}
                    name="title"
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
                    <div className='w-full flex items-center justify-end mt-4'>
                        <DialogClose disabled={!isValid}>
                            <Button type='submit'>Add Subtask</Button>
                        </DialogClose>
                    </div>
                </form>
            </Form>
        </DialogContent>
    </Dialog>
  )
}

export default AddKanbanSubtaskCard