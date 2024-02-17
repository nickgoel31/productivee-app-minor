import React from 'react'
import Navbar from './_components/navbar'
import Sidebar from './_components/sidebar'


const DocsLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=''>
      <Navbar />
      <div className='w-48'>
        <Sidebar />
      </div>
      {children}
    </div>
  )
}

export default DocsLayout