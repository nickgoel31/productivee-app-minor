import { ChevronRightCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface WorkspaceProps {
    name: string;
    desc: string | null;
    id: string;
    imageUrl: string
}

const WorkspaceBox = ({name, desc,id,imageUrl}: WorkspaceProps) => {
  return (
    <Link href={`/workspace/${id}`} className='border rounded-md overflow-hidden cursor-pointer group relative'>
        <div className='overflow-hidden object-contain w-full h-40 md:h-40 xl:h-56 relative'>
            <Image src={imageUrl} className='group-hover:scale-110 transition duration-500' alt='Workspace Thumbnail' width={2000} height={2000}/>
            <span className='absolute w-full h-full top-0 bg-black/10'></span>
        </div>

        <div className='absolute bottom-0 flex justify-between gap-1 py-4 px-3 items-end w-full h-[70%] bg-gradient-to-t from-black via-black/60 to-transparent group-hover:text-green-400 transition'>
            <h2 className='line-clamp-1 font-medium text-sm'>{name}</h2>
            <ChevronRightCircle className='shrink-0' size={20}/>
        </div>
    </Link>
  )
}

export default WorkspaceBox