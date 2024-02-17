"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';

const editTaskSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required."
    })
})

const EditKanbanCardForm = () => {
  return (
    <div>EditKanbanCardForm</div>
  )
}

export default EditKanbanCardForm