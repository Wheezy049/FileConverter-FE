import AboutLayout from '@/components/AboutLayout'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | [FlexiConvert]',
  description: 'Learn more about [FlexiConvert], our mission, and how we help users with powerful online tools to simplify their work.',
}

function page() {
  return (
    <>
    <AboutLayout />
    </>
  )
}

export default page