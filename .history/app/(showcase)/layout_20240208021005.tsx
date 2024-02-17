import React from 'react'

const ShowcaseLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='py-10'>
      {children}
    </div>
  )
}

export default ShowcaseLayout