import React from "react";
import Image from "next/image";

const ProductCard: React.FC<{
  imageSrc: string;
  title: string;
  subtitle?: string;
}> = ({ imageSrc, title, subtitle }) => (
  <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
    <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
    <div className="absolute inset-0 flex flex-col text-white text-xl md:text-2xl bg-black bg-opacity-30 text-center p-4 sm:p-6 lg:p-8 lg:py-96 py-40">
      <div className="font-semibold text-lg md:text-xl lg:text-2xl">
        {title}
      </div>
      {subtitle && (
        <div className="mt-2 font-semibold text-lg md:text-xl lg:text-2xl">
          {subtitle}
        </div>
      )}
      <button className="mt-4 py-2 sm:px-8 lg:px-0   bg-gray-200 text-black rounded-full hover:bg-black hover:text-white transition-colors duration-300">
        DETAIL
      </button>
    </div>
  </div>
);

const Product: React.FC = () => {
  return (
    <>
      <div className="relative bg-[url('/about-images/Guns.jpeg')]  bg-cover h-[200px] md:h-[500px] md:w-full"></div>
      <div className="p-4 text-2xl md:text-3xl md:w-full h-16 bg-white text-black  md:text-start md:px-20">
        PRODUCTS
      </div>
      <div className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductCard imageSrc="/product-images/01.jpg" title="HAND GUNS" />
          <ProductCard
            imageSrc="/product-images/02.jpg"
            title="HEAVY MACHINE"
            subtitle="GUNS"
          />
          <ProductCard
            imageSrc="/product-images/03.jpg"
            title="MEDIUM CALIBER"
            subtitle="GUNS"
          />
        </div>
      </div>
    </>
  );
};

export default Product;
