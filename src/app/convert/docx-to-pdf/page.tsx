import React from 'react'
import { Metadata } from 'next'
import DocxToPdf from '@/components/DocxToPdf'

export const metadata: Metadata = {
  title: "DOCX to PDF Online – Free Tool",
  description: "Convert Microsoft Word DOCX files into PDFs with perfect formatting. 100% free, secure, and instant."
}

function page() {
  return (
    <div className='pt-[100px]'>
      <DocxToPdf />
    </div>
  )
}

export default page