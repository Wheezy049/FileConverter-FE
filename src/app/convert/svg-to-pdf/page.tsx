import React from 'react'
import { Metadata } from 'next'
import SvgToPdf from '@/components/SvgToPdf'

export const metadata: Metadata = {
  title: "SVG to PDF Online – Free Converter",
  description: "Convert scalable vector graphics (SVG) into PDF documents instantly. Simple, free, and accurate."
}

function page() {
  return (
    <div className='pt-[100px]'>
      <SvgToPdf />
    </div>
  )
}

export default page