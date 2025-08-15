import React from 'react'

function GetStarted() {
  return (
    <section className="w-full mx-auto md:py-[92px] py-[30px] bg-[#4A90E2]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="md:max-w-[767px] w-full m-auto text-center">
          <h3 className="text-[#ffffff] text-[24px] md:text-[40px] md:leading-[54.6px] font-bold px-[12px] md:px-[20px]">
            Unlock Your Content&apos;s Potential Now!
          </h3>
          <p className="text-[18px] leading-[24.3px] font-normal text-[#F4F4F5] px-[12px] py-[16px]">
            Create, transform, and enhance all your content with powerful AI
            tools designed for creators, researchers, professionals, and
            educators.
          </p>
          <button className="transition md:h-[56px] h-[40px] md:px-[56px] px-[24px] md:py-[16px] py-0 rounded-[32px] bg-[#1A1A1A] text-white text-[14px] leading-[24px] mt-[24px] duration-300 hover:-translate-y-1">Get Started</button>
        </div>
      </div>
    </section>
  )
}

export default GetStarted