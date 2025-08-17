import PricingLayout from '@/components/PricingLayout'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Pricing | [FlexiConvert]",
  description: "Choose the right plan for your needs. Explore our free and premium pricing options designed to fit individuals, teams, and businesses."
}

function page() {
  return (
    <>
      <PricingLayout />
    </>
  )
}

export default page