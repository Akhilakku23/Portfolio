import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-white py-8">
      <div className="container mx-auto text-center">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/in/akhil-saji-7027892b5/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-xl hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Akhilakku23"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-xl hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/akhi_l._/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-xl hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/AkkuA69308"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-xl hover:text-blue-400"
          >
            <FaTwitter />
          </a>
        </div>

       
        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; 2025 Akhil Saji. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
