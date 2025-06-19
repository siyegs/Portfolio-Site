import { useState } from "react";
import { FiSun, FiArrowUpRight, FiX } from "react-icons/fi";
import "./styles/Header.css";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] text-white">
        <div className=" flex justify-between p-5">
          <a
            href="/"
            className="items-center"
            style={{
              fontFamily: "Special Gothic Expanded One",
              fontSize: "clamp(20px, 2vw, 23px)",
            }}
          >
            ISK
          </a>

          {/* <div className="right-part"> */}
          <ul className="flex items-center list-none m-0 p-0 w-[27%] justify-between">
            <li className="language-switch">
              <a href="/fr/">FR</a>
            </li>
            <li className="theme-switch-btn" onClick={toggleTheme}>
              <FiSun />
            </li>
            <li>
              <button
                className={`hamburger-btn ${isMenuOpen ? "open" : ""}`}
                aria-label="Open menu"
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </li>
          </ul>
        </div>
      </header>

      {isMenuOpen && (
        <div className="menu-overlay fixed inset-0 bg-black bg-opacity-95 z-[99] flex flex-col items-center justify-center text-white backdrop-blur-md">
          <nav className="flex flex-col items-center text-5xl font-bold">
            <a href="/" className="my-4">
              <span className="numbers">01</span>
              <span className="scale">H</span>O<span className="pr-[5px] scale">M</span>E
            </a>
            <a href="/" className="my-4">
              <span className="numbers">02</span>
              WO<span className="scale">R</span>K
            </a>
            <a href="/" className="my-4">
              <span className="numbers">03</span>
              A<span className="scale">B</span>OUT
            </a>
            <a href="/" className="my-4">
              <span className="numbers">04</span>
              CO<span className="scale">N</span>TACT
            </a>
          </nav>
          <div className="flex mt-8 text-lg">
            <a
              href="https://www.linkedin.com/"
              className="flex items-center mx-4"
              target="_blank"
            >
              <FiArrowUpRight className="mr-2" /> linkedin
            </a>
            <a
              href="https://github.com/"
              className="flex items-center mx-4"
              target="_blank"
            >
              <FiArrowUpRight className="mr-2" /> github
            </a>
            <a
              href="https://x.com/"
              className="flex items-center mx-4"
              target="_blank"
            >
              <FiArrowUpRight className="mr-2" /> x
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;