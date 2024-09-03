import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo or Site Name */}
        <div className="text-lg font-bold">
          <a href="/">EduBoard</a>
        </div>

        {/* Social Media Icons */}
        <div className="mt-4 flex space-x-4">
          <a href="#facebook" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#twitter" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#instagram" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        {/* Copyright Information */}
        <div className="mt-4 text-center text-gray-500">
          &copy; {new Date().getFullYear()} EduBoard. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
