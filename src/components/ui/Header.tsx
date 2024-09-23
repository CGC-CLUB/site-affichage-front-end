import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

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
          <a href="#home" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
          <a
            href="/dashboard/posts"
            className="text-gray-600 hover:text-gray-900"
          >
            Dashboard
          </a>
        </nav>
        {/* User Profile Icon */}
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}

export default Header;
