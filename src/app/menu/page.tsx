import { menu } from "@/data/data";
import { MENU_INFO } from "@/constants";
import Link from "next/link";

const Menu = () => {
  const { btn } = MENU_INFO;
  return (
    <div className="p-4 lg:px-20 xl:px-30 2xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 md:h-fit bg-cover p-8"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2 flex flex-col`}>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm my-8 min-h-[7.5rem]">{category.desc}</p>
            <button
              className={`hidden xl:block bg-${category.color} text-${
                category.color === "black" ? "white" : "red-500"
              } py-2 px-4 rounded-md`}
            >
              {btn}
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Menu;
