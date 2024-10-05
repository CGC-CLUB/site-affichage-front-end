import { headerLinks } from "@/constants";
import { HiLogin } from "react-icons/hi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <a href="/">EduBoard</a>
        </div>
        {/* Navigation */}
        <nav className="flex space-x-4">
          {headerLinks.map((link) => {
            return (
              <a href={link.href} className="text-gray-600 hover:text-gray-900">
                {link.name}
              </a>
            );
          })}
        </nav>
        {/* User Profile Icon */}
        <div className="flex items-center space-x-2">
          <Link to='/login-tv'>
          <HiLogin size={30} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
