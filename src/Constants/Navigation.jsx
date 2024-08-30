import { ImHome } from "react-icons/im";
import { LuTv } from "react-icons/lu";
import { RiMovie2Fill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";

export const navigation = [
  { label: "TV Shows", href: "tv", icon: <LuTv /> },
  { label: "Movies", href: "movie", icon: <RiMovie2Fill /> },
];

export const mobileNavigation = [
  { label: "Home", href: "/", icon: <ImHome /> },
  ...navigation,
  {
    label: "Search",
    href: "/search",
    icon: <IoSearchOutline />,
  },
  {
    label: "Profile",
    href: "/",
    icon: <img className="w-7 h-7 rounded-full" src="\user.svg" />,
  },
];
