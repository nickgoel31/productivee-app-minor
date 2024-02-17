"use client"

import React, { useMemo, useState } from 'react';
import KanbanCard from './kanban-card';
import DropIndicator from './kanban-drop-indicator';
import { SortableContext } from "@dnd-kit/sortable";
import { DndContext, DragStartEvent } from '@dnd-kit/core';
import { KanbanColumnProps, TaskType } from '@/types';

const KanbanColumn = ({ id, colTitle, colKey, headingColor, tasks }: KanbanColumnProps) => {
    const [active, setActive] = useState(false);

    if (!tasks) return null;

    const tasksIds = useMemo(() => {
        return tasks.map((t) => t.id);
    }, []);

    

    return (
        
            <div className='flex flex-col items-center gap-5 h-full min-h-[600px]'>
                <div className='w-full items-center justify-between flex p-2'>
                    <h2 className={`font-semibold ${headingColor}`}>{colTitle}</h2>
                    <p className='text-neutral-400'>{tasks.length}</p>
                </div>

                <div className={`flex flex-col items-center gap-2 p-2 w-full h-full transition hover:bg-neutral-900/50 ${active ? "bg-neutral-900/50" : ""}`}>
                    
                        {tasks.map(task => (
                            <KanbanCard key={task.id} {...task} />
                        ))}
                </div>
            </div>
        
    );
};

export default KanbanColumn;
