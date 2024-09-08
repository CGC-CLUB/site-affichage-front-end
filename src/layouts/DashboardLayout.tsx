import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar";
import { useState } from "react";
import { HiUsers } from "react-icons/hi";
import { MdOutlinePostAdd, MdPerson } from "react-icons/md";
import { Outlet } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { FaPlaceOfWorship } from "react-icons/fa";
import { TbLayoutSidebarRightFilled } from "react-icons/tb";

export default function DashboardSideBar() {
  // future state

  const [isExpanded, setIsExpanded] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="flex">
      <button
        onClick={() => setIsExpanded(true)}
        className="absolute left-5 top-5"
      >
        <TbLayoutSidebarRightFilled size={30} />
      </button>
      <aside
        data-is-expanded={!isExpanded}
        className="sticky top-0 flex h-dvh w-[200px] flex-col items-start justify-start gap-3 bg-white p-3 shadow shadow-black duration-300 data-[is-expanded=true]:w-0 data-[is-expanded=true]:overflow-hidden data-[is-expanded=true]:p-0"
      >
        <div>
          {/* <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar> */}
          <button
            onClick={() => setIsExpanded(false)}
            data-is-expanded={isExpanded}
            className="duration-300 data-[is-expanded=false]:opacity-0 data-[is-expanded=true]:opacity-100"
          >
            <TbLayoutSidebarRightFilled size={30} />
          </button>
        </div>
        <ul
          data-is-expanded={isExpanded}
          className="mt-auto flex w-full flex-col gap-5 duration-300 data-[is-expanded=false]:opacity-0 data-[is-expanded=true]:opacity-100"
        >
          <li
            className={`rounded-lg p-3 duration-300 hover:bg-gray-200 ${pathname === "/dashboard/posts" && "bg-gray-300"}`}
          >
            <Link
              to={"/dashboard/posts"}
              className="flex w-full items-center gap-5"
            >
              <MdOutlinePostAdd size={30} />
              Posts
            </Link>
          </li>
          <li
            className={`rounded-lg p-3 duration-300 hover:bg-gray-200 ${pathname === "/dashboard/users" && "bg-gray-300"}`}
          >
            <Link to={"/dashboard/users"} className="flex items-center gap-5">
              <HiUsers size={30} />
              Users
            </Link>
          </li>
          <li
            className={`rounded-lg p-3 duration-300 hover:bg-gray-200 ${pathname === "/dashboard/departments" && "bg-gray-300"}`}
          >
            <Link
              to={"/dashboard/departments"}
              className="flex items-center gap-5"
            >
              <FaPlaceOfWorship size={30} />
              Department
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
