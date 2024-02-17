import Image from 'next/image'
import React from 'react'

const WorkspaceBox = () => {
  return (
    <div className='border rounded-md overflow-hidden cursor-pointer group'>
        <div className='overflow-hidden object-contain w-full relative'>
            <Image src={"/bg-1.jpg"} alt='Workspace Thumbnail' width={2000} height={2000}/>
            <span className='absolute w-full h-full top-0 bg-black/10'></span>
        </div>
    </div>
  )
}

export default WorkspaceBox