import ToolsLayout from '@/components/ToolsLayout'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Online Tools | [FlexiConvert]",
  description: "Explore our collection of free and premium online tools for file conversion, productivity, and more—all in one place."
}

function page() {
  return (
    <>
      <ToolsLayout />
    </>
  )
}

export default page