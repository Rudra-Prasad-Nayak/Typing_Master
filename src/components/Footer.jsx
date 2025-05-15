import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="relative bottom-0 left-0 w-full bg-gradient-to-r from-[#01123e] to-[#021d63] text-white py-4 px-4 mt-auto">
    <div className="container mx-auto text-center">
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-8 mb-1">
        <a
          href="https://github.com/rudra420-123"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-500 transition-colors transform hover:scale-110"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/RudraPrasadNayak728/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors transform hover:scale-110"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://www.instagram.com/dipu13562/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 transition-colors transform hover:scale-110"
        >
          <Instagram size={24} />
        </a>
      </div>

      {/* Developer Info */}
      <p className="text-lg mb-1">
        <span className="text-xl font-semibold text-blue-400">
          Developed by{" "}
        </span>
        <span className="text-xl font-bold text-white">Rudra Prasad Nayak</span>
      </p>

      {/* Additional Info */}
      <p className="text-sm opacity-70 mb-1">
        Passionate about coding, technology, and building amazing web
        experiences. I enjoy creating intuitive and efficient user interfaces
        and solving complex problems.
      </p>

      {/* Copyright Notice */}
      <p className="text-xs opacity-80 mb-1">
        &copy; 2025 Rudra Prasad Nayak. All rights reserved.
      </p>

      {/* Contact Info */}
      <p className="text-sm text-gray-400">
        Feel free to reach out:{" "}
        <a
          href="mailto:rudraprasadnayak728@gmail.com"
          className="text-blue-400 hover:text-blue-500"
        >
          rudraprasadnayak728@gmail.com
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
