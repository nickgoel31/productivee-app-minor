"use client"

import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const QuillEditor = () => {
    const [value, setValue] = useState('');

  return (
    <div className='w-full h-full '>
        <div className=''>
            <ReactQuill placeholder='Click here to get started' theme="bubble" className='h-full min-h-[400px] placeholder:text-neutral-300' value={value} onChange={setValue} />

        </div>
    </div>
  )
}

export default QuillEditor