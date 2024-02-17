"use client"


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { WorkspaceEditProps} from "@/types"
import { Input } from '@/components/ui/input'
import DeleteWorkspaceBtn from './delete-workspace-button'
import { formatDate } from '@/helpers/format-date'
import { updateWorkspaceInDB } from "@/actions/update-workspace"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { bannerImages } from "@/data/banners"
import { Check, CheckCheck, Pen, PenBox } from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import DeleteWorkspaceBtnHome from "./delete-workspace-md"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
  

const formSchema = z.object({
    name: z.string().min(1,{
        message: "Please enter a workspace name",
    }),
    description:z.string().optional()
  })

const EditWorkspaceBtn = ({name,id,description,createdAt,imageUrl}:WorkspaceEditProps) => {

    const router = useRouter()

    const [selectedImg,setSelectedImg] = useState(imageUrl)


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name,
          description: description || "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        updateWorkspaceInDB(values,id,selectedImg)
        router.refresh()
      }

      const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null;
    }

    function toggleSelectedImg(url:string) {
      setSelectedImg(url)
    }

    const handleBannerImageClick = (url: string) => {
      toggleSelectedImg(url)
    }


  return (
        <ScrollArea className="h-full w-full">
    <Dialog>
        <DialogTrigger>
            <Button variant={"outline"} className="flex items-center gap-2">
              <PenBox size={15}/>
              Edit
            </Button>
        </DialogTrigger>

        <DialogContent className='w-full'>
            <DialogHeader>
            <DialogTitle>Edit Workspace</DialogTitle>
            <DialogDescription>
                You can edit workspace here.
            </DialogDescription>
            </DialogHeader>

            <div className='space-y-6 w-full'>

            <div className='flex flex-col space-y-3 mb-1'>
              <h2 className='font-medium text-sm ml-1'>Banner Image</h2>

              <Carousel className='w-full '>
                <CarouselContent className=''>
                  {bannerImages.map((img) => (
                    <CarouselItem  onClick={() => handleBannerImageClick(img.imageUrl)} key={img.id} className={cn('w-full flex-grow-0 object-contain cursor-pointer h-[93px]  basis-1/3 flex items-center justify-center group relative overflow-hidden')}>
                      <Image src={img.imageUrl} alt='Banner image' width={1920} height={1080} className='object-contain transition'/>
                      <span className={cn('w-full h-full absolute group-hover:opacity-100 bg-background/50 opacity-0 transition top-0 left-0 text-center flex items-center justify-center text-sm font-medium',
                      selectedImg === img.imageUrl && "opacity-100")}>
                        {selectedImg === img.imageUrl ? (<><Check /></>) : (<>{img.label}</>) }
                      </span>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNext className='translate-x-[-30px]'/>
                <CarouselPrevious className='translate-x-[30px]'/>
              </Carousel>

              {/* <div className='grid grid-cols-3 gap-4 px-1'>
                
              </div> */}
            </div>

                {/* TODO EDIT NAME */}
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-sm font-medium ml-1">Workspace Name</FormLabel>
                        <FormControl>
                            <Input placeholder="eg- lutune ai" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-sm font-medium ml-1">Description</FormLabel>
                        <FormControl>
                            <Input placeholder="eg- an ai app" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    <div className='items-center justify-between flex w-full'>
                    <div className='space-y-1'>
                        <label htmlFor="createdAt" className='text-sm font-medium ml-1'>Created on</label>
                        <p className='text-xs font-medium text-neutral-400 ml-1'>{formatDate(createdAt)}</p>
                    </div>
                    <DialogClose className=''>
                        <Button type="submit">Save Changes</Button>
                    </DialogClose>
                </div>


                </form>
                </Form>



                <div className='p-3 px-5 border-2 rounded-lg border-dashed border-destructive 2xl:block lg:hidden block'>
                    <h3 className='font-semibold text-destructive dark:text-red-500 mb-1'>Danger zone</h3>
                    <p className='text-sm text-neutral-400 mb-3'>This action can&apos;t be  undone.</p>
                    <DeleteWorkspaceBtnHome workspaceId={id}/>
                </div>
            </div>

            
        </DialogContent>
    </Dialog>
        </ScrollArea>
  )
}

export default EditWorkspaceBtn