import React from 'react'
import { Metadata } from 'next'
import PngToPdf from '@/components/PngToPdf'

export const metadata: Metadata = {
  title: "Convert PNG to PDF Online – Free Tool",
  description: "Quickly turn PNG images into PDF documents. Simple, fast, and secure conversion directly in your browser."
}

function page() {
  return (
    <div className='pt-[100px]'>
        <PngToPdf />
    </div>
  )
}

export default page