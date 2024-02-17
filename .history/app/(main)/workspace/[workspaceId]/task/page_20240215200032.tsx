import React from 'react'

const TasksPage = () => {


    // const todos = workspace.todos;
    // const {imageUrl} = workspace;
  
    // const sortedTodos= todos.sort(function (a, b) {
    //   return new Date(a.createdAt).getTime( ) - new Date(b.createdAt).getTime();
    // })
  
    // const workspaceId = workspace.id

  return (
    <div>
        Hello
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