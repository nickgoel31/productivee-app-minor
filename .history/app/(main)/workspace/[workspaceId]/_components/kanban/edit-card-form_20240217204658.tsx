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
import { columns, defaultTags } from '@/data/kanban';
import { editTaskInDB } from '@/actions/tasks/edit-task';
import { cn } from '@/lib/utils';
import { Column, Id } from '@/types/kanban';
import { Label } from '@/components/ui/label';

import { deleteTaskById } from '@/actions/tasks/delete-task';
import DeleteTaskBtn from './dlt-task-btn';

const editTaskSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required."
    }),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]).optional(),
    columnId: z.number()
})

interface Props{
    prevTitle:string;
    workspaceId:string
    taskId:string;
    prevDesc:string | null;
    prevTags?: string[];
    column: Column;
    prevColumnId: number;
}

const EditKanbanCardForm = ({prevTitle, workspaceId,taskId,prevDesc,prevTags, prevColumnId,column}:Props) => {

    var [tags, setTags] = useState<string[] | undefined>(prevTags)

    const [activeColumn, setActiveColumn] = useState<number>(prevColumnId)

    const form = useForm<z.infer<typeof editTaskSchema>>({
        resolver: zodResolver(editTaskSchema),
        defaultValues: {
            title: prevTitle,
            description:prevDesc || "",
            tags: prevTags,
            columnId: prevColumnId,
        }
    })

    const handleTags = (tag:string) => {

        if (Array.isArray(tags)) {
            if (tags.includes(tag)) {
                const filteredTags = tags.filter(t => t !== tag);
                setTags(filteredTags);
            } else {
                setTags([...tags, tag]);
            }
        } else {
            // If tags is undefined or not an array, initialize it as an empty array
            setTags([tag]);
        }
        
    }

    const handleColumns = (columnId: number) => {
        if(activeColumn === columnId) return;
        else {
            setActiveColumn(columnId)
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
                            <div className='flex items-end justify-start flex-wrap mid space-y-1 gap-1'>
                                {defaultTags.map((tag,index) => (
                                    <div key={index}
                                    className={cn(`text-xs text-neutral-300 border rounded-full p-1.5 select-none cursor-pointer px-3 capitalize hover:bg-neutral-300/10 transition`, tags?.includes(tag.value) && "bg-neutral-200 text-neutral-950 font-medium hover:bg-neutral-200/80")}
                                    data-value={tag.value}
                                    onClick={() => {handleTags(tag.value)}} >
                                        {tag.value}
                                    </div>
                                ))}
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* <div className='space-y-3'>
                <Label>Column Select<span className='text-sm text-muted-foreground'>(temporary)</span></Label>

                <div className='flex w-full gap-2 '>
                    {columns.map((col) => (
                        <div 
                        className={cn(`text-xs text-neutral-300 border rounded-full p-1.5 select-none cursor-pointer px-3 lowercase hover:bg-neutral-300/10 transition`, activeColumn === col.id && "bg-neutral-200 text-neutral-950 font-medium hover:bg-neutral-200/80")}
                        key={col.id}
                        onClick={() => {handleColumns(col.id)}} >
                            <p className="capitalize">{col.title}</p>
                        </div>
                    ))}
                </div>
            </div> */}


            <div className='w-full flex items-center justify-between mt-6'>
                
                <DeleteTaskBtn taskId={taskId} workspaceId={workspaceId}/>


                <DialogClose disabled={!isValid}>
                    <Button type='submit'>Save</Button>
                </DialogClose>
            </div>
        </form>
    </Form>
  )
}

export default EditKanbanCardForm