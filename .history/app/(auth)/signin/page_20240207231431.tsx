"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const SignInRedirectPage = () => {

    const router = useRouter()

    router.push("/")

  return (
    <div>LOADING</div>
  )
}

export default SignInRedirectPage