import React from "react";
import Slider from "./Slider";
import Image from "next/image";
const Hero: React.FC = () => {
  return (
    <>
      <div>
        <Slider />
      </div>
      <div className="relative bg-[url('/about-images/Guns.jpeg')] md:bg-cover mt-[-800px] md:mt-[-3030px] md:bg-fixed bg-cover h-[350px] md:h-[600px] w-full">
        <div className="absolute inset-0 flex flex-col justify-center items-center py-20">
          <div className="text-3xl md:text-7xl font-bold text-gray-50">
            Products
          </div>
          <div className="text-sm md:text-lg text-gray-50">
            Among the Top 3 Companies in the World!
          </div>
          <button className="bg-gray-400 rounded-full w-28 h-12 md:w-36 md:h-16 text-sm md:text-2xl text-black hover:bg-black hover:text-white shadow-lg transform hover:scale-105 transition-transform mt-2 md:mt-4">
            More
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center  bg-black text-white p-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-7xl md:text-[250px] font-bold">7</div>
          <div className="flex flex-col items-center justify-center mt-4 md:mt-0 md:ml-4">
            <div className="text-5xl md:text-8xl">REASONS</div>
            <div className="text-xl md:text-3xl font-bold">TO OWN CANIK</div>
            <div className="text-3xl md:text-5xl">FIREARMS</div>
          </div>
        </div>
        <button className="mt-6 md:mt-12 py-2 px-4 md:px-6 bg-gray-600 rounded-full text-sm md:text-lg">
          MORE
        </button>
      </div>
      <div className="py-8 md:py-12 px-4 md:px-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image
            src="/home-images/hero/01.jpg"
            alt="Hero image 1"
            layout="responsive"
            width={500}
            height={300}
            className="w-full h-auto object-cover"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">ABOUT CANiK</h2>
            <p className="mb-4">
              Samsun Yurt Savunma sanayi ve Ticaret A.Ş. is operating in the
              defense sector and has committed itself to be a brand name in
              Turkey and in the World.
            </p>
            <button className="rounded-full border border-white py-2 px-4 w-24 hover:bg-white hover:text-black ">
              MORE
            </button>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              CANiK SUPPORT
            </h2>
            <p className="mb-4">Technology, User Manuals, Usage Rules</p>
            <button className="rounded-full border border-white py-2 px-4 w-24 hover:bg-white hover:text-black ">
              MORE
            </button>
          </div>
          <Image
            src="/contact-images/contact1.jpg"
            alt="Contact image 1"
            layout="responsive"
            width={500}
            height={300}
            className="w-full h-auto object-cover"
          />
          <Image
            src="/home-images/hero/01.jpg"
            alt="Hero image 1"
            layout="responsive"
            width={500}
            height={300}
            className="w-full h-auto object-cover"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">CAREERS</h2>
            <button className="rounded-full border border-white py-2 px-4 w-24 hover:bg-white hover:text-black ">
              MORE
            </button>
          </div>
        </div>
      </div>
      <div className="relative bg-[url('/home-images/hero/03.jpg')] md:bg-fixed bg-cover h-[200px] md:h-[600px] w-full">
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="text-4xl md:text-7xl font-bold text-gray-50">
            SALES CAMPAIGNS
          </div>
          <button className="bg-gray-400 rounded-full w-28 h-12 md:w-36 md:h-16 text-sm md:text-2xl text-black hover:bg-black hover:text-white shadow-lg transform hover:scale-105 transition-transform mt-2 md:mt-4">
            More
          </button>
        </div>
      </div>
      <div className="relative bg-[url('/home-images/slider/3.jpg')] md:bg-fixed bg-cover h-[200px] md:h-[600px] w-full">
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="text-4xl md:text-7xl font-bold text-gray-50">
            UPCOMING EVENT
          </div>
          <button className="bg-gray-400 rounded-full w-28 h-12 md:w-36 md:h-16 text-sm md:text-2xl text-black hover:bg-black hover:text-white shadow-lg transform hover:scale-105 transition-transform mt-2 md:mt-4">
            More
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
