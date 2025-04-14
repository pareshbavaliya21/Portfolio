import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Github } from "lucide-react";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md"
          : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold gradient-text">
            Paresh
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="hover:text-theme-purple transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-theme-purple transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-theme-purple transition-colors"
            >
              Projects
            </a>
            <a
              href="#education"
              className="hover:text-theme-purple transition-colors"
            >
              Education
            </a>
            <a
              href="#contact"
              className="hover:text-theme-purple transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/pareshbavaliya21"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-theme-purple transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>

            <button
              className="md:hidden focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden absolute left-0 right-0 p-4 mt-3 bg-white dark:bg-gray-900 shadow-lg rounded-lg transition-all duration-300 transform ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-3 pointer-events-none"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <a
              href="#about"
              className="hover:text-theme-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-theme-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-theme-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#education"
              className="hover:text-theme-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Education
            </a>
            <a
              href="#contact"
              className="hover:text-theme-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
