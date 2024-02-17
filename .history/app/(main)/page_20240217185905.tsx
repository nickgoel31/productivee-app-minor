
import { getAllWorkspacesByUserId } from '@/actions/get-workspace';
import { Workspace } from '@/types';
import { auth } from '@clerk/nextjs';
import {KanbanIcon, ListChecks, WorkflowIcon } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';


export default async function Home() {

  const {userId} = auth()

  if(!userId) redirect("/sign-in");

  const workspaces: Workspace[] | undefined = await getAllWorkspacesByUserId(userId);

  if(workspaces === undefined) return;


  const randomWorkspace = workspaces[Math.round(Math.random()  * (workspaces.length))];

  return (
    <main className="flex flex-col gap-8 h-full py-8 flex-1 pr-10">
      <div className="space-y-2">
        <h1 className="font-semibold text-4xl">Overview</h1>
        <p className="font-medium text-sm text-neutral-400">We are all about productivity</p>
      </div>

      <div className="w-full flex flex-col gap-6 ">
        <div className='flex items-center w-full gap-4'>
          <div className='border rounded-xl p-4 flex-[1.2] h-56 flex items-center justify-center'>
            {/* <Bar data={{
              labels: ["A","B","C"],
              datasets: [
                {
                  label:"Tasks",
                  data:[2,3,4]
                }
              ]
            }} /> */}
            <h3 className='font-medium text-2xl flex flex-col items-center justify-center gap-3 text-neutral-400'>
              <WorkflowIcon size={30}/>
              In Development
            </h3>
          </div>
        </div>

        <div className=' rounded-xl p-4 flex-[1.8] flex flex-col gap-4'>
            <h2 className='text-lg font-semibold text-neutral-200'>
              Continue working with {randomWorkspace ? randomWorkspace.name : '...'}
            </h2>

            <div className='flex items-center gap-4'>
              <Link href={`/workspace/${randomWorkspace.id}/kanban`} className='font-medium flex flex-col items-center justify-center gap-2 border rounded p-4 hover:border-green-400/30 hover:text-green-500 transition group'>
                <KanbanIcon />
                Kanban board
              </Link>

              <Link href={`/workspace/${randomWorkspace.id}/task`} className='font-medium flex flex-col items-center justify-center gap-2 border rounded p-4 hover:border-green-400/30 hover:text-green-500 transition group'>
                <ListChecks />
                <p className='flex items-center gap-1 justify-center'>
                Tasks <span className='text-xs font-medium text-muted-foreground group-hover:text-green-400 transition'>(legacy)</span>
                </p>
              </Link>
            </div>

          </div>
      </div>
    </main>
  );
}
