"use client";
import Image from "next/image";
import {
  MOBILE_MENU_LINKS,
  LINK_USER_LOGIN,
  CART_ICON_INFO,
} from "@/constants";
import { useState } from "react";
import Link from "next/link";
import CartIcon from "../CartIcon";

const MobileMenu = () => {
  const links = MOBILE_MENU_LINKS;
  const loginLinks = LINK_USER_LOGIN;
  const cartIcon = CART_ICON_INFO;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  // TEMPORARY
  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={handleOpen}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={handleOpen}
        />
      )}
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map(({ id, title, url }) => (
            <Link href={url} key={id} onClick={handleOpen}>
              {title}
            </Link>
          ))}
          {!user ? (
            <Link href={loginLinks[0].url} onClick={handleOpen}>
              {loginLinks[0].title}
            </Link>
          ) : (
            <Link href={loginLinks[1].url} onClick={handleOpen}>
              {loginLinks[1].title}
            </Link>
          )}
          <Link href={cartIcon.url} onClick={handleOpen}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};
export default MobileMenu;
