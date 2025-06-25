import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-white py-8">
      <div className="container mx-auto text-center">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/in/aneena-shyjan-607748320/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-xl hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/copilot/c/eb606233-d3e1-4ef1-b5be-5e0e31afdcb7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-xl hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/___a_n_e_e_n_a____?utm_source=qr&igsh=c2JrYnM1cnc5bWs4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-xl hover:text-pink-500"
          >
            <FaInstagram />
          </a>
        </div>

       
        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; 2025 Aneena Shyjan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
