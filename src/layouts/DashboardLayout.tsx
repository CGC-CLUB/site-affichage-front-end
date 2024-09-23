import { HiUsers } from "react-icons/hi";
import { MdOutlinePostAdd, MdPerson } from "react-icons/md";
import { Outlet } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { FaPlaceOfWorship } from "react-icons/fa";

export default function DashboardSideBar() {
  const { pathname } = useLocation();

  return (
    <div className="flex">
      <aside className="sticky top-0 flex h-dvh flex-col items-start justify-start gap-3 bg-white p-3 shadow shadow-black duration-300">
        <ul className="mt-auto flex w-full flex-col gap-5 duration-300">
          <li
            className={`rounded-lg p-3 duration-300 hover:bg-gray-200 ${pathname === "/dashboard/posts" && "bg-gray-300"}`}
          >
            <Link
              to={"/dashboard/posts"}
              className="flex w-full items-center gap-5"
            >
              <MdOutlinePostAdd size={30} />
            </Link>
          </li>
          <li
            className={`rounded-lg p-3 duration-300 hover:bg-gray-200 ${pathname === "/dashboard/users" && "bg-gray-300"}`}
          >
            <Link to={"/dashboard/users"} className="flex items-center gap-5">
              <HiUsers size={30} />
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
