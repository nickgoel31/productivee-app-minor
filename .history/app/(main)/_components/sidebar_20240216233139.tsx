"use client"

import { Box, InfoIcon, LayoutDashboard, MailIcon, Space } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getAllWorkspaces } from '@/data/workspaces'
import { UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

interface Workspace {
  id: string; 
  name: string; 
  description: string | null; 
  createdAt: Date;
}

interface WorkspaceListProps {
  workspaces: Workspace[];
}


const Sidebar = ({workspaces}: WorkspaceListProps) => {

  const pathname = usePathname()

  const isWhiteboard = pathname.includes("/whiteboard");

  const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null;
    }

  return (
    <>
    {
      !isWhiteboard ? (
        <div className='w-64 bg-background border-r h-full gap-12 flex flex-col items-center justify-between px-6 py-14 shrink-0 overflow-hidden z-[20]'>
        <div className='w-full h-full flex flex-col items-center shrink-0 gap-10'>
          <Link href={"/"} className='font-semibold text-2xl'>Productive</Link>

          <ul className='flex flex-col gap-3 items-start h-full justify-between  w-full'>
              {/* <li className='flex items-center gap-3 font-medium p-2 bg-neutral-300/10 w-full rounded-md'><LayoutDashboard className='text-neutral-400'/>Overview</li> */}

              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='1' className='border-none w-full '>
                  <AccordionTrigger className='w-full flex items-center justify-between'>
                    <div className='flex items-center gap-1'>
                      <Box className='text-neutral-400'/>
                      <Link href={'/workspace'} className='flex items-center gap-3 font-medium p-2'>
                        Workspaces
                      </Link>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className='flex flex-col px-2 gap-3'>
                    {workspaces.map((workspace) => (
                      <Link className='hover:underline' href={`/workspace/${workspace.id}`}>{workspace.name}</Link>
                    ))}
                    {workspaces.length === 0 && (
                      <p className='text-muted-foreground text-sm italic font-medium'>No workspaces yet.</p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className='flex flex-col  justify-center gap-4'>
                
                <Link target='_blank' href={"mailto:harshgoel2004@gmail.com?subject=Have an Idea for Productive App"} className='flex items-center gap-2 text-sm font-medium hover:underline underline-offset-2 transition'><MailIcon size={18}/>{"Have an idea? Email me"}</Link>
              </div>
          </ul>
        </div>
    </div>
      ) : (
        <div className='w-10 bg-background border-r h-full gap-12 flex flex-col items-center justify-between px-6 py-14 shrink-0 overflow-hidden z-[20]'>
          <div className='w-full h-full flex flex-col items-center shrink-0 gap-10'>
            <Link href={"/"} className='font-semibold text-2xl'>Productive</Link>
          </div>
        </div>
      )
    }

    
    </>
  )
}

export default Sidebar