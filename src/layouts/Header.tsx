import { headerLinks } from "@/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
// this may show error but the implimentation is ok

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
          <Avatar>
            <AvatarImage src="https://scontent.fcfk1-1.fna.fbcdn.net/v/t1.15752-9/426053811_751360690265526_6086854460049802454_n.jpg?stp=dst-jpg_s100x100&_nc_cat=104&ccb=1-7&_nc_sid=b70caf&_nc_eui2=AeFdmmnFThn2SpPFUetBZUlrImw6HoGy3iQibDoegbLeJMfiVi8dxSHsOCHxmx9ijnQL6cp3L_Z1B0F1UnlF_U1K&_nc_ohc=E4WF8iJyG2sQ7kNvgFRuBJo&_nc_ht=scontent.fcfk1-1.fna&_nc_gid=AXKFlKYzxcC9AG4cSgW_OPI&oh=03_Q7cD1QFwe3-n-h_mhbuPtGvfbOFpkezx30R8-_ZRlFvxEEX3zw&oe=671FEA0F" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}

export default Header;
