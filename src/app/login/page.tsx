import { LOGIN_INFO } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  const {
    title,
    desc,
    signInGoogle,
    signInFacebook,
    problem,
    contact,
    loginImg,
    googleImg,
    facebookImg,
  } = LOGIN_INFO;
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      {/* BOX */}
      <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src={loginImg} alt="" fill className="object-cover" />
        </div>
        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">{title}</h1>
          <p>{desc}</p>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
            <Image
              src={googleImg}
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>{signInGoogle}</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
            <Image
              src={facebookImg}
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>{signInFacebook}</span>
          </button>
          <p className="text-sm">
            {problem}
            <Link className="underline" href="/">
              {" "}
              {contact}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
