import React from 'react'


const DocsLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=''>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default DocsLayout