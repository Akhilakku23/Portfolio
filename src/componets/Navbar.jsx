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
          href="https://www.linkedin.com/in/aneena-shyjan-607748320/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-500 transition-colors"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/copilot/c/eb606233-d3e1-4ef1-b5be-5e0e31afdcb7"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-800 transition-colors"
        >
          <FaGithub />
        </a>



        <a
          href="https://www.instagram.com/___a_n_e_e_n_a____?utm_source=qr&igsh=c2JrYnM1cnc5bWs4"
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
