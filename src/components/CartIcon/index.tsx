import { CART_ICON_INFO } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const CartIcon = () => {
  const { url, img, content } = CART_ICON_INFO;
  return (
    <Link href={url} className="flex items-center gap-4">
      <div className="relative w-8 md:w-5 h-8 md:h-5">
        <Image src={img} alt="" fill />
      </div>
      <span>{`${content} (3)`}</span>
    </Link>
  );
};
export default CartIcon;
