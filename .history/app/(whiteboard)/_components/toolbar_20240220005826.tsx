import { Trash2 } from 'lucide-react';
import React from 'react'

interface Props {
    clear: () => void;
}

const ToolBar = ({clear}:Props) => {
  return (
    <div className='absolute top-[50%] translate-y-[-50%] left-6 border rounded-full p-3'>
        <button onClick={clear}>
            <Trash2 />
        </button>
    </div>
  )
}

export default ToolBar