import React from 'react'
import Navbar from './Navbar'
import GetStarted from './GetStarted'
import Footer from './Footer'
import HowItWorks from './HowITWorks'
import ProductList from './ProductList'
import { products } from '@/data/Product'

function ToolsLayout() {

  return (
    <div className='w-full bg-gray-50 h-full'>
        <Navbar />
        <div className='pt-[100px]'>
        <div className="w-[90%] sm:w-[85%] md:w-[100%] lg:max-w-[1300px] md:max-w-[900px] mx-auto space-y-5 md:space-y-7 p-10 px-14">
        <ProductList products={products} />
        </div> 
        <GetStarted />
        <Footer />
        </div>
    </div>
  )
}

export default ToolsLayout