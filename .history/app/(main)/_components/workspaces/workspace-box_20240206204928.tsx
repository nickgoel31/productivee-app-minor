import Image from 'next/image'
import React from 'react'

const WorkspaceBox = () => {
  return (
    <div className='border rounded-md p-3 overflow-hidden'>
        <div className='overflow-hidden object-contain'>
            <Image src={"/bg-1.jpg"} alt='Workspace Thumbnail' width={1000} height={1000}/>
        </div>
    </div>
  )
}

export default WorkspaceBox