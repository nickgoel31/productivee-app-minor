"use client"

import React, { DragEvent, FormEvent, useState } from 'react';
import KanbanCard from './kanban-card';
import DropIndicator from './kanban-drop-indicator';
import { SetCardsProps } from '@/interfaces';
import { KanbanColumnProps } from '@/types';



const KanbanColumn = ({ colTitle, colKey, headingColor,tasks }: KanbanColumnProps) => {


    const [active,setActive] = useState(false)

    if(!tasks) return;


    

    return (
        <div className='flex flex-col items-center gap-5 h-full min-h-[600px]'>
            <div className='w-full items-center justify-between flex p-2'>
                <h2 className={`font-semibold ${headingColor}`}>{colTitle}</h2>
                <p className='text-neutral-400'>{tasks.length}</p>
            </div>

            <div  className={`flex flex-col  items-center gap-2 p-2 w-full h-full transition hover:bg-neutral-900/50 ${active ? "bg-neutral-900/50" : ""}`}>
                {tasks.map(task => (
                    <KanbanCard key={task.id} {...task} />
                ))}
                <DropIndicator beforeId={"-1"} column={colKey}/>
            </div>
        </div>
    );
};

export default KanbanColumn;








// const handleDragOver = (e:DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     highlightIndicator(e)
//     setActive(true)
// }

// const highlightIndicator = (e:DragEvent<HTMLDivElement>) => {
//     const indicators = getIndicators();
//     clearHighlights(indicators)
//     const el = getNearestIndicator(e, indicators)

//     el.element.style.opacity = "1";
// }

// function getIndicators() {
//     return Array.from(document.querySelectorAll(`[data-column="${columnKey}"]`))
// }

// function clearHighlights(els?: Element[]) {
//     const indicators = els || getIndicators();

//     indicators.forEach((i) => {
//         i.style.opacity = "0";
//     })
// }

// function getNearestIndicator(e:DragEvent<HTMLDivElement>, indicators:Element[]) {
//     const DISTANCE_OFFSET = 50;
//     const el = indicators.reduce((closest, child) => {
//         const box = child.getBoundingClientRect();
//         const offset = e.clientY - (box.top + DISTANCE_OFFSET);

//         if(offset < 0 && offset > closest.offset) {
//             return {offset:offset, element: child}
//         } else{
//             return closest;
//         }
//     }, {
//         offset: Number.NEGATIVE_INFINITY,
//         element: indicators[indicators.length  - 1]
//     })

//     return el;
// }

// const handleDragMouseLeave = () => {
//     setActive(false)
//     clearHighlights()
// }

// const handleDragEnd = (e:DragEvent<HTMLDivElement>) => {
//     setActive(false)
//     clearHighlights()

//     const cardId = e.dataTransfer.getData("cardId");

//     const indicators = getIndicators();

//     const {element} = getNearestIndicator(e, indicators)

//     const before = element.dataset.before || "-1"

//     if(before !== cardId){
//         let copy = [...cards]

//         let cardToTransfer = copy.find((c) => c.id === cardId)
//         if(!cardToTransfer) return;

//         cardToTransfer = {...cardToTransfer, column: columnKey}

//         copy = copy.filter((c) => c.id !== cardId)

//         const moveToBack = before === "-1"

//         if(moveToBack){
//             copy.push(cardToTransfer)
//         }
//         else{
//             const insertAtIndex = copy.findIndex((el) => el.id === before)
//             if ( insertAtIndex === undefined) return;

//             copy.splice(insertAtIndex, 0, cardToTransfer)
//         }

//         setCards(copy);
//     }
// }