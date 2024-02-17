import { Button } from '@/components/ui/button'
import { FaGithub } from 'react-icons/fa'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='px-6 py-4 rounded-lg flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>
            <h1 className='text-3xl font-semibold'>Sign In to Todo App</h1>
            <p className='text-neutral-400'>Welcome Back captain! Let's get you signed in already.</p>
        </div>

        <div className='w-full space-y-4 flex flex-col items-center'>
            <Button className='flex items-center gap-2 w-full' variant={"outline"}>
                <FaGithub size={20}/>
                <p>Login using Github</p>
            </Button>

            <p className='text-sm text-center w-64 font-medium'>By signing in, you accept our Terms of Service and Privacy Policy</p>
        </div>
    </div>
  )
}

export default SignInPage