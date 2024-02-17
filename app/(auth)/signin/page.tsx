"use client"

import { redirect, useRouter } from 'next/navigation'
import React from 'react'

const SignInRedirectPage = () => {

    const router = useRouter()

    redirect("/")

  return (
    <div>
        
    </div>
  )
}

export default SignInRedirectPage