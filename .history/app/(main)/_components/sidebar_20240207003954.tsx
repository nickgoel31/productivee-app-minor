"use client"

import { Box, LayoutDashboard, Space } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const Sidebar = () => {

  const pathname = usePathname()

  return (
    <div className='w-64 bg-background border-r h-full gap-12 flex flex-col items-center px-6 py-14 shrink-0 overflow-hidden'>
        <h2 className='font-semibold text-2xl'>Productive.io</h2>

        <ul className='flex flex-col gap-3 items-start  w-full'>
            {/* <li className='flex items-center gap-3 font-medium p-2 bg-neutral-300/10 w-full rounded-md'><LayoutDashboard className='text-neutral-400'/>Overview</li> */}

            <Accordion type='single' collapsible>
              <AccordionItem value='1' className='border-none w-full bg-red-500'>
                <AccordionTrigger className='w-full flex items-center justify-between'>Workspaces</AccordionTrigger>
                <AccordionContent>
                  Hello
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Link href={'/workspace'} className='flex items-center gap-3 font-medium p-2 hover:bg-neutral-400/10 w-full rounded-md'>
              <Box className='text-neutral-400'/>Workspaces
            </Link>
        </ul>
    </div>
  )
}

export default Sidebar