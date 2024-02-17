"use client"

import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const QuillEditor = () => {
    const [value, setValue] = useState('');

  return (
    <div className='w-full h-full bg-red-500'>
        <div className='min-h-[400px]'>

        </div>
        <ReactQuill theme="bubble" className='h-full' value={value} onChange={setValue} />
    </div>
  )
}

export default QuillEditor