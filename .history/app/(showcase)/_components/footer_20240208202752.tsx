import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='px-40 flex items-center justify-end w-full border-t border-neutral-600/10'>

        <Link href={"policy/privacy"} className='underline'>Privacy Policy</Link>
    </div>
  )
}

export default Footer