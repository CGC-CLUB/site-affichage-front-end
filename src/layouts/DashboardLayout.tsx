import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar";
import { useState } from "react";
import { HiUsers } from "react-icons/hi";
import { MdOutlinePostAdd, MdPerson } from "react-icons/md";
import { Outlet } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

export default function DashboardSideBar() {
  // future state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isExpanded, setIsExpanded] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="flex">
      <aside className="h-dvh flex items-center sticky top-0 flex-col gap-3 p-3 shadow shadow-black">
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <ul className="mt-auto flex items-center flex-col gap-5">
          <li className={`rounded-lg duration-300 hover:bg-gray-200 p-3 ${pathname === "/dashboard/posts" && "bg-gray-300"}`}>
            <Link to={"/dashboard/posts"}>
              <MdOutlinePostAdd size={30} />
            </Link>
          </li>
          <li className={`rounded-lg duration-300 hover:bg-gray-200 p-3 ${pathname === "/dashboard/users" && "bg-gray-300"}`}>
            <Link to={"/dashboard/users"}>
              <HiUsers size={30} />
            </Link>
          </li>
        </ul>
        <div className="mt-auto">
          <MdPerson size={30} />
        </div>
      </aside>
      <main className="flex-1 p-3">
        <Outlet />
      </main>
    </div>
  );
}

// TODO: add the functionality to make the dashboard sidebar expand
