import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

function Testimonies() {
  return (
    <div className="w-full py-8 md:py-16 px-4 md:px-10 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900">
        What Our Users Say
      </h2>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
          <Image
            src="/customer 1.png"
            alt="Customer Story 1"
            width={300}
            height={300}
            className="object-cover rounded-lg w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between w-full md:w-2/3">
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 pb-3">
              <p className="text-sm font-bold text-gray-800">Sarah Thompson</p>
              <p className="text-sm text-gray-500">Small Business Owner</p>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, index) => (
                <Star key={index} fill="#4A90E2" className="text-[#4A90E2]" />
              ))}
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              TiFi File Converter has simplified my workflow tremendously. I can
              quickly convert PDFs to Word, images to PDFs, and compress large
              files in seconds. It saves me a lot of time and keeps my files organized.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
          <Image
            src="/customer 2.png"
            alt="Customer Story 2"
            width={300}
            height={300}
            className="object-cover rounded-lg w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between w-full md:w-2/3">
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 pb-3">
              <p className="text-sm font-bold text-gray-800">David Lee</p>
              <p className="text-sm text-gray-500">Student</p>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(4)].map((_, index) => (
                <Star key={index} fill="#4A90E2" className="text-[#4A90E2]" />
              ))}
              <Star fill="none" className="text-[#4A90E2]" />
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              I use TiFi for converting lecture notes and research PDFs. The
              platform is fast, easy to use, and supports almost every file
              format I need. I no longer waste time searching for different
              converters online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonies;
