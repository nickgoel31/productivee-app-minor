import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface NewTodoFormData {
  title: string;
}

const NewTodoAdd: React.FC = () => {
  const [formData, setFormData] = useState<NewTodoFormData>({ title: '' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmitForm = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Access validated and typed form data here
    const { title } = formData;

    // Submit your form data and handle the response
    console.log('New todo title:', title);

    // Reset the form
    setFormData({ title: '' });
  };

  return (
    <div className="flex items-center justify-between border border-dashed rounded-md w-96 overflow-hidden cursor-pointer group">
      <Dialog>
        <DialogTrigger className="w-full px-4 py-4">
          <div className="flex items-center gap-1 justify-center w-full text-neutral-500 group-hover:text-neutral-50 transition text-center">
            <h2 className={cn('font-medium text-lg line-clamp-1')}>Add a todo</h2>
            <Plus />
          </div>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add a Todo</DialogTitle>
            <DialogDescription>This action cannot be undone.</DialogDescription>
          </DialogHeader>

          <form onSubmit={onSubmitForm} className="flex flex-col gap-1">
            <p className="text-sm font-medium ml-1">Title</p>
            <Input
              type="text"
              name="title" // Name the input for easier access
              placeholder="eg- Buy milk"
              value={formData.title} // Controlled input
              onChange={handleInputChange}
            />
            <Button className="w-fit mt-3" type="submit">
              Add to the list
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewTodoAdd;
