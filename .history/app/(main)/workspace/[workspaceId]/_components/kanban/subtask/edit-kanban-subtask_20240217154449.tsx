"use client"

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { KanbanSubtask } from '@/types/kanban';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface Props{
    subtask: KanbanSubtask;
}

const editSubTaskSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required to create a task!"
    })
})

const EditKanbanSubtask = ({subtask}:Props) => {

    const form = useForm<z.infer<typeof editSubTaskSchema>>({
        resolver: zodResolver(editSubTaskSchema),
        defaultValues: {
            title: ""
        }
    })

    const {isValid} = form.formState;

    const handleNewSubTaskSubmit = (values: z.infer<typeof editSubTaskSchema>) => {
        // addKanbanSubtaskInDB(values,taskId)
    }

  return (
    <Dialog>
        <DialogTrigger>
            <button className='rounded border text-xs font-medium p-1.5 px-3 hover:bg-neutral-500/20 transition'>Edit</button>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit "{subtask.title}"</DialogTitle>
                <DialogDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </DialogDescription>
            </DialogHeader>

           <Form {...form}>
            <form>
                <div className='space-y-1'>
                    <Label>Subtask ID</Label>
                    <Input className='h-9' type='text' disabled value={subtask.id} />
                </div>

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
            </form>
           </Form>
        </DialogContent>
    </Dialog>
  )
}

export default EditKanbanSubtask