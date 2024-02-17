import { Box, LayoutDashboard, Space } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-64 bg-background border-r h-full gap-12 flex flex-col items-center px-6 py-14 shrink-0 overflow-hidden'>
        <h2 className='font-semibold text-2xl'>Todo App</h2>

        <ul className='flex flex-col gap-3 items-start  w-full'>
            {/* <li className='flex items-center gap-3 font-medium p-2 bg-neutral-300/10 w-full rounded-md'><LayoutDashboard className='text-neutral-400'/>Overview</li> */}
            <Link href={'/'} className='flex items-center gap-3 font-medium p-2 hover:bg-neutral-400/10 w-full rounded-md'>
                <Box className='text-neutral-400'/>Workspaces</Link>
        </ul>
    </div>
  )
}

export default Sidebar