import React from 'react'
import Navbar from './_components/navbar'
import Sidebar from './_components/sidebar'


const DocsLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=''>
      <Navbar />
      <Sidebar />
      {children}
    </div>
  )
}

export default DocsLayout