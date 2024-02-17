import React from 'react'

const ShowcaseLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='px-48'>
      {children}
    </div>
  )
}

export default ShowcaseLayout