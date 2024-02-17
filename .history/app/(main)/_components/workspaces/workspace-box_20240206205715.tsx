import { ChevronRightCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const WorkspaceBox = () => {
  return (
    <div className='border rounded-md overflow-hidden cursor-pointer group relative'>
        <div className='overflow-hidden object-contain w-full relative'>
            <Image src={"/bg-1.jpg"} className='group-hover:scale-110 transition duration-500' alt='Workspace Thumbnail' width={2000} height={2000}/>
            <span className='absolute w-full h-full top-0 bg-black/10'></span>
        </div>

        <div className='absolute bottom-0 w-full h-[70%] bg-gradient-to-t from-black via-black/60 to-transparent'>
            <h2 className='line-clamp-1'>Workspace Name hfg hfgh fghf ghhgf</h2>
            <ChevronRightCircle className='' size={20}/>
        </div>
    </div>
  )
}

export default WorkspaceBox