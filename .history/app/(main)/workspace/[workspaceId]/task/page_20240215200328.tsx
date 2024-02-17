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
            Tasks are no longer being maintained, you can now use 
            <Link href={`/workspace/${workspaceId}/kanban`} >Kanban Boards</Link>
             for better productivity.
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
    </div>

//     <div className='flex flex-col w-full gap-4 items-center'>
//     <h3 className='font-semibold text-xl'>My Tasks</h3>
//     {!todos[0] && (
//         <div className="flex flex-col items-center gap-2 mt-6 text-neutral-400">
//           {/* <Cat size={72} /> */}
//           <h3 className=" font-medium text-center">No tasks found in this workspace! Click on add a task to get started.</h3>
//         </div>
//       )}

//     <div className="flex flex-col gap-3">
//           {sortedTodos.map(async (todo) => {
//             const subtasks = await getAllSubtasks(todo.id);
//             return (
//               <TodoCard id={todo.id} key={todo.id} title={todo.title} isDone={todo.isDone} workspaceId={workspace.id} data={subtasks}/>
//           )})}
//     </div>
//     <NewTodoAdd workspaceId={workspace.id}/>
//   </div>
  )
}

export default TasksPage