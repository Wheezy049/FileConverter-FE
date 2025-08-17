import React from 'react'
import { Metadata } from 'next'
import JpegToPng from '@/components/JpegToPng'

export const metadata: Metadata = {
  title: "JPEG to PNG Online – Free & Secure",
  description: "Transform JPEG images into transparent PNGs in seconds. Fast, reliable, and completely free to use."
}

function page() {
  return (
    <div className='pt-[100px]'>
       <JpegToPng />
    </div>
  )
}

export default page