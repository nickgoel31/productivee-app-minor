"use client"

import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const QuillEditor = () => {
    const [value, setValue] = useState('');

  return (
    <div className='w-full h-full bg-red-500'>
        <div className='min-h-[400px]'>
            <ReactQuill theme="bubble" className='h-full min-h-[400px]' value={value} onChange={setValue} />

        </div>
    </div>
  )
}

export default QuillEditor