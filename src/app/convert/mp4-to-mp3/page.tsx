import React from 'react'
import { Metadata } from 'next'
import Mp4ToMp3 from '@/components/Mp4ToMp3'

export const metadata: Metadata = {
  title: "MP4 to MP3 Online – Free & Fast",
  description: "Extract audio from MP4 videos and save it as MP3 instantly. High-quality and easy to use."
}

function page() {
  return (
    <div className='pt-[100px]'>
      <Mp4ToMp3 />
    </div>
  )
}

export default page