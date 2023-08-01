import {
  NAVBAR_TITLE,
  NAVBAR_LINKS,
  NAVBAR_USER,
  NAVBAR_PHONE,
} from "@/constants";
import MobileMenu from "../MobileMenu";
import Link from "next/link";
import CartIcon from "../CartIcon";
import Image from "next/image";

const Navbar = () => {
  const title = NAVBAR_TITLE;
  const links = NAVBAR_LINKS;
  const login = NAVBAR_USER;
  const phone = NAVBAR_PHONE;
  const user = false;
  return (
    <div className="h-12 md:h-24 text-red-500 p-4 lg:px-20 xl:px-40 flex justify-between items-center border-b-2 border-b-red-500 uppercase">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        {links.map(({ id, url, title }) => (
          <Link href={url} key={id}>
            {title}
          </Link>
        ))}
      </div>
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href={"/"}>{title}</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <MobileMenu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 right-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image
            src={phone.img}
            alt=""
            width={phone.width}
            height={phone.height}
          />
          <span>{phone.content}</span>
        </div>
        {!user ? (
          <Link href={login[0].url}>{login[0].title}</Link>
        ) : (
          <Link href={login[1].url}>{login[1].title}</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};
export default Navbar;
