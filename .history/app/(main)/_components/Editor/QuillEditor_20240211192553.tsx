"use client"

import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = () => {
    const [value, setValue] = useState('');

  return (
    <div className='w-full'>
        <ReactQuill theme="snow" className='border-0 outline-none' value={value} onChange={setValue} />
    </div>
  )
}

export default QuillEditor