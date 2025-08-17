import React from 'react'
import { Metadata } from 'next'
import SvgToPng from '@/components/SvgToPng'

export const metadata: Metadata = {
  title: "SVG to PNG Online – Free Tool",
  description: "Convert SVG graphics into PNG images instantly. High-quality, fast, and free."
}
function page() {
  return (
    <div className='pt-[100px]'>
      <SvgToPng />
    </div>
  )
}

export default page