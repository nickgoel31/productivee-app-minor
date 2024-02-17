import React from 'react'
import Navbar from './_components/navbar'

const ShowcaseLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='px-40'>
      <Navbar />
      {children}
    </div>
  )
}

export default ShowcaseLayout