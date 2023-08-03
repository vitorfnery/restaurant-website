import { CART_INFO } from "@/constants";
import Image from "next/image";

const CartPage = () => {
  const cart = CART_INFO;
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-30 2xl:p-40">
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">{cart.title}</h1>
            <span>{cart.size}</span>
          </div>
          <h2 className="font-bold">{cart.singlePrice}</h2>
          <span className="cursor-pointer">{cart.exclude}</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">{cart.title}</h1>
            <span>{cart.size}</span>
          </div>
          <h2 className="font-bold">{cart.singlePrice}</h2>
          <span className="cursor-pointer">{cart.exclude}</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">{cart.title}</h1>
            <span>{cart.size}</span>
          </div>
          <h2 className="font-bold">{cart.size}</h2>
          <span className="cursor-pointer">{cart.exclude}</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-30 2xl:p-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">{cart.subtotal}</span>
          <span className="">{cart.subtotalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="">{cart.service}</span>
          <span className="">{cart.servicePrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="">{cart.delivery}</span>
          <span className="text-green-500">{cart.deliveryPrice}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">{cart.total}</span>
          <span className="font-bold">{cart.totalPrice}</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 md:w-2/3 self-end">
          {cart.checkoutBtn}
        </button>
      </div>
    </div>
  );
};

export default CartPage;
