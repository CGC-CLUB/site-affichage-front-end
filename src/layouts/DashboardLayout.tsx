import { Outlet } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { sidebarLinks } from "@/constants";

export default function DashboardSideBar() {
  const { pathname } = useLocation();

  return (
    <div className="flex">
      <aside className="sticky top-0 flex h-dvh flex-col items-start justify-start gap-3 bg-white p-3 shadow shadow-black duration-300">
        <ul className="mb-auto mt-auto flex w-full flex-col gap-5 duration-300">
          {sidebarLinks.map((link) => {
            return (
              <li
                key={link.name}
                className={`rounded-lg p-3 duration-300 hover:bg-gray-200 ${pathname === link.href && "bg-gray-300"}`}
              >
                <Link to={link.href} className="flex items-center gap-5">
                  <link.icon size={30} />
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
      <main className="flex-1 p-3">
        <Outlet />
      </main>
    </div>
  );
}
