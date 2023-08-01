import { FOOTER_INFO } from "@/constants";
import Link from "next/link";

const Footer = () => {
  const { title, url, info } = FOOTER_INFO;
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between">
      <Link href={url} className="font-bold text-xl">
        {title}
      </Link>
      <p>{info}</p>
    </div>
  );
};
export default Footer;
