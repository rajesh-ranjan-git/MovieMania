import { ImHome } from "react-icons/im";
import { LuTv } from "react-icons/lu";
import { RiMovie2Fill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";

export const navigation = [
  { label: "Movies", href: "tv", icon: <LuTv /> },
  { label: "TV Shows", href: "movies", icon: <RiMovie2Fill /> },
];

export const mobileNavigation = [
  {
    href: "/",
    icon: <ImHome />,
  },
  { href: "tv", icon: <LuTv /> },
  { href: "movies", icon: <RiMovie2Fill /> },
  {
    href: "/search",
    icon: <IoSearchOutline />,
  },
  {
    href: "/",
    icon: <img className="w-7 h-7 rounded-full" src="\user.svg" />,
  },
];
