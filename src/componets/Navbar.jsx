import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"; // Fixed Twitter icon import
import logo from "../assets/AK/2.png"


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-8">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="akhil logo" className="h-14 w-auto " />
        </a>
      </div>

      {/* Social Media Links */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/akhil-saji-7027892b5/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-500 transition-colors"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Akhilakku23"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-800 transition-colors"
        >
          <FaGithub />
        </a>

        <a
          href="https://x.com/AkkuA69308"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-blue-400 transition-colors"
        >
          <FaTwitter />
        </a>

        <a
          href="https://www.instagram.com/akhi_l._?igsh=MWVvcjQ3ODQ2N2Ztag=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500 transition-colors"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
