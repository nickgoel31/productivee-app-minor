import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=' px-6 md:px-40 flex items-center justify-center w-full  gap-10 py-4'>

        <Link href={"policy/privacy"} className='uppercase text-sm font-medium text-neutral-400 hover:text-emerald-500 transition'>Privacy Policy</Link>
        <Link href={"policy/terms-of-service"} className='uppercase text-sm font-medium text-neutral-400 hover:text-emerald-500 transition'>Terms of Service</Link>
    </div>
  )
}

export default Footer