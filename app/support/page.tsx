import React from "react";
import Image from "next/image";

const Support: React.FC = () => {
  return (
    <>
      <div className="relative bg-[url('/support-images/support1.jpg')] bg-cover   h-[200px] md:h-[500px] md:w-full"></div>
      <div className="p-4 text-2xl md:text-3xl md:w-full h-16 bg-white text-black  md:text-start md:px-20">
        MANUALS
      </div>
      <div className="py-8 md:py-12 px-4 md:px-8 lg:px-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Image
            src="/support-images/support2.jpg"
            alt="support image 1"
            layout="responsive"
            width={500}
            height={300}
            className="w-full h-auto object-cover"
          />
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              USER MANUALS
            </h2>
            <p className="mb-4">User Guides for all models</p>
            <button className="rounded-full border border-white py-2 px-4 md:w-32 hover:bg-white hover:text-black transition-colors">
              MORE
            </button>
          </div>

          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Privacy Statement
            </h2>
            <p className="mb-4">Privacy Statement</p>
            <button className="rounded-full border border-white py-2 px-4 md:w-32 hover:bg-white hover:text-black transition-colors">
              MORE
            </button>
          </div>
          <Image
            src="/support-images/support3.png"
            alt="support image 2"
            width={500}
            height={300}
            className="w-full h-auto object-cover rounded-lg"
          />
          <Image
            src="/support-images/support1.jpg"
            alt="support image 3"
            width={500}
            height={300}
            className="w-full h-auto object-cover rounded-lg"
          />
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Rules of Handling Firearms
            </h2>
            <p className="mb-4">
              Before using any product, please read your OPERATING MANUAL
              carefully. Please click on &quot;Maintenance&quot; to read the
              rules.
            </p>
            <button className="rounded-full border border-white py-2 px-4 md:w-32 hover:bg-white hover:text-black transition-colors">
              MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
