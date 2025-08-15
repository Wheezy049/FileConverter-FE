import React from 'react';
import Testimonies from './Testimonies';
import Footer from './Footer';
import Navbar from './Navbar';

function AboutLayout() {
  return (
    <div className="w-full bg-gray-50 h-full">
      <Navbar />
      <div className='pt-[120px]'>
      <div className=" w-[90%] sm:w-[85%] md:w-[95%] lg:max-w-[1300px] mx-auto space-y-8 md:space-y-12 p-6 md:p-10">
        <div className="text-center flex flex-col items-center mx-auto max-w-[800px] space-y-5 md:space-y-7">
          <h1 className="font-bold text-3xl md:text-5xl text-gray-900">About Flexiconvert</h1>
          <p className="text-lg md:text-xl text-gray-700">
            Fast, reliable, and versatile file conversion tools at your fingertips.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            At <span className="text-[#4A90E2] font-semibold">Flexiconvert</span>, we are dedicated
            to simplifying digital workflows by providing users with powerful file conversion tools.
            Whether you need to convert documents, images, videos, or PDFs, our platform makes it
            seamless, efficient, and secure. Our goal is to empower students, professionals, and
            creators to transform and manage their digital content effortlessly.
          </p>
        </div>

        <div className="w-full">
          <Testimonies />
        </div>
      </div>
</div>
      <Footer />
    </div>
  );
}

export default AboutLayout;
