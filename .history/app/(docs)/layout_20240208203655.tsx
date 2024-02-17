import React from 'react'
import Navbar from './_components/navbar'


const DocsLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=''>
      <Navbar />
      {children}
    </div>
  )
}

export default DocsLayout