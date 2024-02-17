"use client"

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import KanbanColumn from '../_components/kanban/kanban-column'
import { ScrollArea } from '@radix-ui/react-scroll-area'

const KanbanPage = ({params}: {params: { workspaceId: string }}) => {

    const [cards, setCards] = useState(DEFAULT_CARDS);


  return (
    <ScrollArea className='h-full bg-red-200 w-full pr-10 '>
        <div>
            
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