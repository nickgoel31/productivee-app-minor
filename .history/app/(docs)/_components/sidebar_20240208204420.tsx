import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-background border-r h-full w-full px-6 py-16 flex flex-col items-center gap-8'>
        <h1 className='text-xl font-medium'>Productive<span className='text-emerald-500'>Docs</span></h1>

        <div className="flex flex-col w-full">
            <h2 className="text-left text-xl">Topics</h2>

            <Accordion type="single" className="w-full" collapsible>
                <AccordionItem value="item-1" className="border-none w-full">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>

    </div>
  )
}

export default Sidebar