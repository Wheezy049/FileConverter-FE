import React from 'react'
import { Metadata } from 'next'
import LoginForm from '@/components/LoginForm'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Register with us',
}

function page() {
  return (
    <div className='pb-[30px] pt-[100px]'>
        <LoginForm />
    </div>
  )
}

export default page