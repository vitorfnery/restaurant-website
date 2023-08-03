import { FOOTER_INFO } from "@/constants";
import Link from "next/link";

const Footer = () => {
  const { title, url, info } = FOOTER_INFO;
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-30 2xl:px-40 text-red-500 flex items-center justify-between">
      <Link href={url} className="font-bold text-xl">
        {title}
      </Link>
      <p className="text-center text-sm sm:text-base">{info}</p>
    </div>
  );
};
export default Footer;
