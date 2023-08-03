import { featuredProducts } from "@/data/data";
import { FEATURED_INFO } from "@/constants";
import Image from "next/image";

const Featured = () => {
  const { btn } = FEATURED_INFO;
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      <div className="w-max flex">
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="
                      w-screen md:w-[50vw] xl:w-[33vw] h-[60vh] xl:h-[90vh] 
                      flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300
                      "
          >
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl xl:text-2xl 2xl:text-3xl font-bold uppercase">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">$ {item.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                {btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Featured;
