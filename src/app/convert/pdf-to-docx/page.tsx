import React from 'react'
import { Metadata } from 'next'
import PdfToDocx from '@/components/PdfToDocx'

export const metadata: Metadata = {
  title: "PDF to DOCX Online – Free Tool",
  description: "Turn PDF documents into editable Word files quickly and securely. No downloads needed."
}

function page() {
  return (
    <div className='pt-[100px]'>
      <PdfToDocx />
    </div>
  )
}

export default page