import React from 'react'
import { Metadata } from 'next'
import SignupForm from '@/components/signupForm'

export const metadata: Metadata = {
  title: 'Signup',
  description: 'Register with us',
}

function page() {
  return (
    <div className='pb-[30px] pt-[100px]'>
        <SignupForm />
    </div>
  )
}

export default page