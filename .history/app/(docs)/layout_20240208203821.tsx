import React from 'react'
import Navbar from './_components/navbar'
import Sidebar from './_components/sidebar'


const DocsLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=''>
      <Navbar />
      <div className='w-48 top-0 left-0 fixed'>
        <Sidebar />
      </div>
      {children}
    </div>
  )
}

export default DocsLayout