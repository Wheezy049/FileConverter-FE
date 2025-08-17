import React from 'react'
import { Metadata } from 'next'
import PngToSvg from '@/components/PngToSvg'

export const metadata: Metadata = {
  title: "PNG to SVG Online – Free & Reliable",
  description: "Transform PNG images into scalable SVG graphics effortlessly. Fast, accurate, and free."
}

function page() {
  return (
    <div className='pt-[100px]'>
      <PngToSvg />
    </div>
  )
}

export default page