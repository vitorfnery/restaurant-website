"use client";
import { SLIDER_INFO } from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

const Slider = () => {
  const { btn, data } = SLIDER_INFO;
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] bg-fuchsia-50">
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-5xl md:text-6xl xl:text-7xl text-center uppercase p-4 md:p-10">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8">{btn}</button>
      </div>
      <div className="w-full flex-1 relative ">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};
export default Slider;
