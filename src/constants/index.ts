import { FaPlaceOfWorship } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { MdHome, MdOutlinePostAdd } from "react-icons/md";

export const sidebarLinks = [
  {
    name: "Home",
    href: "/",
    icon: MdHome,
  },
  {
    name: "Posts",
    href: "/dashboard/posts",
    icon: MdOutlinePostAdd,
  },
  {
    name: "Users",
    href: "/dashboard/users",
    icon: HiUsers,
  },
  {
    name: "Department",
    href: "/dashboard/departments",
    icon: FaPlaceOfWorship,
  },
];

export const headerLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/dashboard/posts",
  },
  {
    name: "Contact",
    href: "/dashboard/users",
  },
  {
    name: "Dashboard",
    href: "/dashboard/posts",
  },
];
