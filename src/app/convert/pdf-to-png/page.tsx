import React from 'react'
import { Metadata } from 'next'
import PdfToPng from '@/components/PdfToPng'

export const metadata: Metadata = {
  title: "PDF to PNG Online – Free & Reliable",
  description: "Convert PDF files into sharp PNG images in seconds. Works in your browser without extra software."
}

function page() {
  return (
    <div className='pt-[100px]'>
      <PdfToPng />
    </div>
  )
}

export default page