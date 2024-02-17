import { Button } from '@/components/ui/button'
import { FaGithub } from 'react-icons/fa'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='px-6 py-4 rounded-lg'>
        <div className='flex flex-col gap-2'>
            <h1 className='text-3xl font-semibold'>Sign In to Todo App</h1>
            <p className='text-neutral-400'>Welcome Back captain! Let's get you signed in already.</p>
        </div>

        <div>
            <Button className='flex items-center' asChild variant={"outline"}>
                <FaGithub />
            </Button>
        </div>
    </div>
  )
}

export default SignInPage