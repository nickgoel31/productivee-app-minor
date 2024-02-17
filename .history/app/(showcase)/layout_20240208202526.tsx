import React from 'react'
import Navbar from './_components/navbar'
import Footer from './_components/footer'

const ShowcaseLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='px-40'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default ShowcaseLayout