import { OFFER_INFO } from "@/constants";
import Image from "next/image";
import CountDown from "../CountDown";

const Offer = () => {
  const { img, title, content, btn } = OFFER_INFO;
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between  md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">{title}</h1>
        <p className="text-white xl:text-xl">{content}</p>
        <CountDown />
        <button className="bg-red-500 text-white rounded-md py-3 px-6">
          {btn}
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="relative flex-1 w-full md:h-full">
        <Image alt="" src={img} fill className="object-contain" />
      </div>
    </div>
  );
};
export default Offer;
