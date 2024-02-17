"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, X } from 'lucide-react';
import { MouseEvent, useEffect, useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { defaultTags } from '@/data/kanban';
import { editTaskInDB } from '@/actions/tasks/edit-task';
import { cn } from '@/lib/utils';

const editTaskSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required."
    }),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]).optional()
})

interface Props{
    prevTitle:string;
    workspaceId:string
    taskId:string;
    prevDesc?:string;
    prevTags?: string[];
}

const EditKanbanCardForm = ({prevTitle, workspaceId,taskId,prevDesc,prevTags}:Props) => {

    const [tags, setTags] = useState<string[]>([])

    useEffect(() => {
        if(prevTags){
            setTags(prevTags)
        }
    })
    useEffect(() => {
        console.log(tags)
    },[tags])


    const form = useForm<z.infer<typeof editTaskSchema>>({
        resolver: zodResolver(editTaskSchema),
        defaultValues: {
            title: prevTitle,
            description:prevDesc,
            tags: prevTags,
        }
    })

    const handleTags = (tag:string) => {

        if(tags?.includes(tag)){
            const filteredTags = tags.filter(t => t !== tag) 
            setTags(filteredTags)
        }

        else{
            setTags([...tags, tag])
        }
    }

    const {isValid} = form.formState;

    const handleEditTaskSubmit = (values: z.infer<typeof editTaskSchema>) => {
        values.tags = tags;
        editTaskInDB(values,taskId,workspaceId)
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
                            {/* <div className='py-1 px-2 w-full rounded flex items-center justify-end gap-2 flex-row-reverse flex-wrap shrink-0'>
                                <div className='border rounded hover:bg-neutral-400/10 cursor-pointer transition py-1.5 px-3 flex gap-1 text-xs items-center  text-muted-foreground'>
                                    Add
                                    <PlusCircle size={13} className='text-neutral-500'/>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <div className='border rounded-full hover:bg-neutral-400/10 cursor-pointer transition py-1.5 px-3 flex gap-1 text-xs items-center text-neutral-300'>
                                        
                                        <X size={13} className='text-neutral-500'/>
                                    </div>                             
                                </div>
                            </div> */}
                            {/* <ToggleGroup type='multiple' className='flex items-end justify-start flex-wrap mid space-y-1' {...field}>
                                {defaultTags.map((tag) => (
                                    <ToggleGroupItem onClick={() => {handleTags(tag.value)}} value={tag.value} size={"sm"} 
                                    className={cn('text-xs text-neutral-300 font-medium border rounded-full px-3 capitalize', tags.includes(tag.value) ? "bg-neutral-300/10 text-neutral-100" : "")}>
                                        {tag.value}
                                    </ToggleGroupItem>
                                ))}
                            </ToggleGroup> */}
                            <div className='flex items-end justify-start flex-wrap mid space-y-1 gap-1'>
                                {defaultTags.map((tag) => (
                                    <div 
                                    className='text-sm border rounded-full p-2'
                                    data-value={tag.value} >
                                        {tag.value}
                                    </div>
                                ))}
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />


            <div className='w-full flex items-center justify-end mt-4'>
                <DialogClose disabled={!isValid}>
                    <Button type='submit'>Edit Task</Button>
                </DialogClose>
            </div>
        </form>
    </Form>
  )
}

export default EditKanbanCardForm