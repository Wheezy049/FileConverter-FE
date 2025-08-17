import React from 'react'
import { Metadata } from 'next'
import JpegToPdf from '@/components/JpegToPdf'

export const metadata: Metadata = {
  title: "JPEG to PDF Online – Free & Easy",
  description: "Merge or convert JPG images into PDFs instantly. No watermarks, no sign-up required."
}

function page() {
  return (
    <div className='pt-[100px]'>
      <JpegToPdf />
    </div>
  )
}

export default page