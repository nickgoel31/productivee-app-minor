import React from 'react'
import Sidebar from '../(main)/_components/sidebar'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='h-full flex items-center justify-center '>
      <Sidebar />
      {children}
    </div>
  )
}

export default AuthLayout