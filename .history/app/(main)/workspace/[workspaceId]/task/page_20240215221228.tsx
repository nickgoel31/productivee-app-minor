import { Button } from '@/components/ui/button'
import { StepBack } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const TasksPage = ({params}: {params: {workspaceId:string}}) => {

    const {workspaceId} = params;


    // const todos = workspace.todos;
    // const {imageUrl} = workspace;
  
    // const sortedTodos= todos.sort(function (a, b) {
    //   return new Date(a.createdAt).getTime( ) - new Date(b.createdAt).getTime();
    // })
  
    // const workspaceId = workspace.id

  return (
    <div className='flex flex-col gap-6 pr-10 py-6'>
       <div className='flex items-center w-full justify-between'>
        <div className='space-y-1'>
          <h2 className='text-2xl font-semibold'>Tasks <span className='text-sm font-medium text-muted-foreground'>(Legacy)</span></h2>
          <p className='text-sm text-muted-foreground'>
            Tasks are no longer being maintained, you can now use&nbsp;
            <Link href={`/workspace/${workspaceId}/kanban`} className='underline underline-offset-1'>Kanban Boards</Link>
            &nbsp;for better productivity.
          </p>
        </div>

        <div className='flex gap-4 items-center'>
        <Button variant={"outline"} asChild>
          <Link href={`/workspace/${workspaceId}`}>
            <StepBack size={17} className='mr-1'/> 
            Go back
          </Link>
        </Button>
        </div>
      </div>

      <div className='bg-red-500'>

      </div>
    </div>
  )
}

export default TasksPage