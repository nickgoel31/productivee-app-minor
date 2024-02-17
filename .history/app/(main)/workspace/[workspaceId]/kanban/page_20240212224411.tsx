"use client"

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import KanbanColumn from '../_components/kanban/kanban-column'
import { ScrollArea } from '@/components/ui/scroll-area'

const KanbanPage = ({params}: {params: { workspaceId: string }}) => {

    const [cards, setCards] = useState(DEFAULT_CARDS);



  return (
    <ScrollArea className='h-full  w-full pr-10 '>
        <div className='flex flex-col gap-8 py-7 h-full w-full'>
        <div className='flex items-center justify-between'>
            <div className='space-y-1'>
                <h1 className='text-2xl font-semibold'>Kanban Board</h1>
                <p className="font-medium text-sm text-neutral-400">Best for keeping track of tasks.</p>
            </div>

            <div className='add'>
                <Button className='' variant={"outline"}>Add a new task +</Button>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 items-start h-full'>

            <KanbanColumn 
            title="ON HOLD"
            columnKey="onhold"
            headingColor="text-neutral-500"
            cards={cards}
            setCards={setCards} />

            <KanbanColumn 
            title="TODO"
            columnKey="todo"
            headingColor="text-yellow-300/70"
            cards={cards}
            setCards={setCards}/>

            <KanbanColumn 
            title="IN PROGRESS"
            columnKey="inprogress"
            headingColor="text-blue-400/70"
            cards={cards}
            setCards={setCards}/>

            <KanbanColumn 
            title="COMPLETED"
            columnKey="completed"
            headingColor="text-green-400/70"
            cards={cards}
            setCards={setCards}/>
            
        </div>
    </div>
    </ScrollArea>
  )
}

export default KanbanPage



const DEFAULT_CARDS = [
    // BACKLOG
    { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
    { title: "SOX compliance checklist", id: "2", column: "backlog" },
    { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
    { title: "Document Notifications service", id: "4", column: "backlog" },
    // TODO
    {
      title: "Research DB options for new microservice",
      id: "5",
      column: "todo",
    },
    { title: "Postmortem for outage", id: "6", column: "todo" },
    { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },
  
    // DOING
    {
      title: "Refactor context providers to use Zustand",
      id: "8",
      column: "doing",
    },
    { title: "Add logging to daily CRON", id: "9", column: "doing" },
    // DONE
    {
      title: "Set up DD dashboards for Lambda listener",
      id: "10",
      column: "done",
    },
  ];