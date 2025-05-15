import { User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white dark:bg-[#08013e] text-gray-900 dark:text-white shadow-md px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="icon.png" alt="Logo" className="w-10 h-10 object-contain" />
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Typing Master
        </h1>
      </div>
      <a
        href="https://rudra420-123.github.io/RPN_Portfolio/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="flex items-center gap-2 px-4 py-2 bg-[#1c0568] hover:bg-[#1f0288] transition text-white rounded-full"
          title={"Visit Author's Portfolio"}
          aria-label={"Visit Author's Portfolio"}
        >
          <User size={18} />
          <span className="text-lg">Author</span>
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
