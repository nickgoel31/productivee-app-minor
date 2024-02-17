import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='px-40 flex items-center justify-end w-full border-t border-neutral-600/10 gap-10 py-5'>

        <Link href={"policy/privacy"} >Privacy Policy</Link>
        <Link href={"policy/privacy"} >Terms of Service</Link>
    </div>
  )
}

export default Footer