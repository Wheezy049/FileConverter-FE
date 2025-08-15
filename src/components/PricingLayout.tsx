"use client"
import React, { useState } from 'react'
import Navbar from './Navbar'
import { plans } from '@/data/Plan'
import PricingCard from './PricingCard'
import Footer from './Footer'

function PricingLayout() {

    const [activeTag, setActiveTag] = useState<'Month' | 'Annually'>('Month')
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return (
        <div className='w-full bg-gray-50 h-full'>
            <Navbar />
            <div className="max-w-[1268px] w-full h-auto flex flex-col items-center mx-auto lg:px-0 px-[24px] pt-[150px]">
                <h2 className="text-4xl font-[550] md:text-5xl leading-[52.8px]">
                    Find the <span className="bg-gradient-to-r from-[#4A90E2] via-[#023978] to-[#29425f] inline-block text-transparent bg-clip-text">best plan for you</span>
                </h2>
                <div className="p-2 mt-10 mx-auto rounded-[.5rem] leading-6 font-bold bg-[#F1F5F9] max-w-[max-content] flex items-center justify-between mb-10 md:gap-5">
                    <button
                        className={`px-3 py-2 rounded-[.5rem] ${activeTag === "Month" ? "bg-white" : "bg-transparent font-[300] text-[grey]"
                            }`}
                        onClick={() => setActiveTag("Month")}
                    >
                        Monthly
                    </button>
                    <button
                        className={`px-3 py-2 rounded-[.5rem] ${activeTag === "Annually" ? "bg-white" : "bg-transparent font-[300] text-[grey]"
                            }`}
                        onClick={() => setActiveTag("Annually")}
                    >
                        Annually <span className="text-[#4A90E2] ml-2 font-[550]">Save 15%</span>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:pt-10 mb-10 lg:px-14">
                    {plans.map((plan) => (
                        <PricingCard
                            key={plan.id}
                            id={plan.id}
                            plan={plan.plan_name}
                            price={plan.price[activeTag]}
                            description={plan.description}
                            billingCircle={plan.plan_interval}
                            features={plan.features}
                            billingType={activeTag}
                            isAuthenticated={isAuthenticated && plan.id === 1}
                        />
                    ))}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default PricingLayout