import React from 'react'
import { Metadata } from 'next'
import PngToJpeg from '@/components/PngToJpeg'

export const metadata: Metadata = {
  title: "Convert PNG to JPEG Online – Free & Fast",
  description: "Convert PNG to JPEG instantly with our free online tool. Fast, secure, and easy to use—no installation required."
}

function page() {
  return (
    <div className='pt-[100px]'>
      <PngToJpeg />
    </div>
  )
}

export default page