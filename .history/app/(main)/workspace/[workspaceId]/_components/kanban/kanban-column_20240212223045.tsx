import React from 'react'

interface KanbanColumnProps{
    title: string;
    columnKey:string;
    headingColor: string;
    cards: {
        id: number,
        title: string
    }[],
    setCards: React.Dispatch<React.SetStateAction<{
        id: number;
        title: string;
    }[]>>
}

const KanbanColumn = ({title, columnKey, headingColor, cards, setCards} : KanbanColumnProps) => {
  return (
    <div className='flex flex-col items-center gap-5 p-2 h-full hover:bg-neutral-900/50 transition'>

                <div className='w-full items-center justify-between flex'>
                    <h2 className=' font-semibold text-neutral-500'>ON HOLD</h2>
                    <p className='text-neutral-400'>3</p>
                </div>
                
                <div className='flex flex-col gap-2 items-center w-full'>
                    <div className='border p-3 w-full bg-neutral-900 rounded-lg cursor-grab' draggable>
                        <h3>Make a navbar</h3>
                    </div>

                    <div className='border p-3 w-full bg-neutral-900 rounded-lg'>
                        <h3>Make a navbar</h3>
                    </div>

                    <div className='border p-3 w-full bg-neutral-900 rounded-lg'>
                        <h3>Make a navbar</h3>
                    </div>
                </div>

            </div>
  )
}

export default KanbanColumn