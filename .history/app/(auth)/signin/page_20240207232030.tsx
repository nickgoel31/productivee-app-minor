"use client"

import { redirect, useRouter } from 'next/navigation'
import React from 'react'
import {BeatLoader} from "react-spinners"

const SignInRedirectPage = () => {

    const router = useRouter()

    redirect("/")

  return (
    <div>
        <BeatLoader color='white'/>
    </div>
  )
}

export default SignInRedirectPage