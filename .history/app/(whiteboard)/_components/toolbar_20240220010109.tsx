import { Circle, Square, Text, Trash2, Type } from 'lucide-react';
import React from 'react'

interface Props {
    clear: () => void;
}

const ToolBar = ({clear}:Props) => {
  return (
    <div className='absolute top-[50%] translate-y-[-50%] left-6 border rounded-full p-1'>
        <div className='flex flex-col w-full h-full gap-3'>
            <div className='p-2 rounded-full hover:bg-neutral-500/10 transition'>
                <Type />
            </div>

            <div className='p-2 rounded-full hover:bg-neutral-500/10 transition'>
                <Square />
            </div>

            <div className='p-2 rounded-full hover:bg-neutral-500/10 transition'>
                <Circle />
            </div>

            <div className='p-2 rounded-full hover:bg-neutral-500/10 transition'>
                <Trash2 />
            </div>
        </div>
    </div>
  )
}

export default ToolBar