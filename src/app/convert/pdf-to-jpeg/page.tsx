import React from 'react'
import { Metadata } from 'next'
import PdfToJpeg from '@/components/PdfToJpeg'

export const metadata: Metadata = {
  title: "PDF to JPEG Online – Free & Fast",
  description: "Extract and convert PDF pages into high-quality JPG images. Quick, secure, and easy to use."
}

function page() {
  return (
    <div className='pt-[100px]'>
      <PdfToJpeg />
    </div>
  )
}

export default page