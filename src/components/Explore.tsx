import React from 'react'
import ProductList from './ProductList'
import { products } from '@/data/Product'

function Explore() {
    return (
        <div className="w-[90%] sm:w-[85%] md:w-[100%] lg:max-w-[1300px] md:max-w-[900px] mx-auto mt-10 space-y-5 md:space-y-7 md:p-6 lg:px-14">
            <h1 className="text-[24px] md:text-[32px] font-[500] text-center text-[#09090B]">
                Explore Our Products
            </h1>
            <ProductList products={products.slice(0, 6)} />
        </div>
    )
}

export default Explore