import React from 'react'
import { Metadata } from 'next'
import FileCompression from '@/components/FileCompression'

export const metadata: Metadata = {
  title: "Compress Files Online – Free & Fast",
  description: "Reduce file size without losing quality. Supports multiple file types and works instantly."
}

function page() {
  return (
    <div className='pt-[100px]'>
      <FileCompression />
    </div>
  )
}

export default page