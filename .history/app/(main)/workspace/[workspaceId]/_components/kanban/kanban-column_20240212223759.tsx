"use client"

import React, { useState } from 'react';

interface KanbanColumnProps {
    title: string;
    columnKey: string;
    headingColor: string;
    cards: {
        id: number;
        title: string;
        column: string;
    }[];
    setCards: React.Dispatch<React.SetStateAction<{
        id: number;
        title: string;
        column: string;
    }[]>>;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ title, columnKey, headingColor, cards, setCards }) => {


    const [active,setActive] = useState(false)

    return (
        <div className='flex flex-col items-center gap-5  h-full '>
            <div className='w-full items-center justify-between flex p-2'>
                <h2 className={`font-semibold ${headingColor}`}>{title}</h2>
                <p className='text-neutral-400'>{cards.length}</p>
            </div>

            <div className={`flex flex-col gap-2 items-center p-2 w-full h-full transition ${active ? "bg-neutral-900/50" : ""}`}>
                {cards.map(card => (
                    <div key={card.id} className='border p-3 w-full bg-neutral-900 rounded-lg'>
                        <h3>{card.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KanbanColumn;
