import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiSun, FiArrowUpRight } from "react-icons/fi";
import "./styles/Header.css";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-5 left-0 w-full z-[100] text-white ${
          location.pathname === "/about" ? "top-[0px] bg-inherit rounded-b-sm backdrop-blur-md" : ""
        } ${isMenuOpen ? " bg-inherit top-[20px]" : ""}`}
      >
        <div
          className={`flex justify-between p-5 md:w-[85%] md:mx-auto ${
            theme == "light" && isMenuOpen ? "text-[black]" : ""
          }`}
        >
          <p
            onClick={() => navigate("/")}
            className="items-center"
            style={{
              fontFamily: "Special Gothic Expanded One",
              fontSize: "clamp(20px, 2vw, 23px)",
            }}
          >
            ISK
          </p>

          <ul className="flex items-center list-none m-0 p-0 w-fit gap-x-10 justify-evenly">
            <li className="theme-switch-btn" onClick={toggleTheme}>
              <FiSun />
            </li>
            <li>
              <button
                className={`hamburger-btn bg-transparent cursor-pointer p-0 w-[20px] h-[20px] grid grid-cols-3 grid-rows-3 relative items-center justify-items-center border-[0] ${
                  isMenuOpen ? "open" : ""
                }`}
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
        <div className="menu-overlay fixed inset-0 bg-black bg-opacity-95 z-[99] flex flex-col items-center justify-center text-white backdrop-blur-sm">
          <nav className="flex flex-col leading-none font-bold text-left" style={{fontSize: "clamp(45px, 2vw, 56px)"}}>
            <p onClick={() => navigate("/")} className="my-4">
              <span className="numbers">01</span>
              <span className="scale">H</span>O
              <span className="pr-[5px] scale">M</span>E
            </p>
            <p onClick={() => navigate("/projects")} className="my-4">
              <span className="numbers">02</span>
              P<span className="scale">R</span>OJECTS
            </p>
            <p onClick={() => navigate("/about")} className="my-4 ">
              <span className="numbers">03</span>A
              <span className="scale">B</span>OUT
            </p>
            <p onClick={() => navigate("/contact")} className="my-4">
              <span className="numbers">04</span>
              CO<span className="scale">N</span>TACT
            </p>
          </nav>
          <div className="social-media flex mt-8 text-lg">
            <a
              href="https://www.linkedin.com/in/iyegere-success-1b1b1b1/"
              className="flex items-center mx-4"
            >
              <FiArrowUpRight className="mr-2" /> linkedin
            </a>
            <a
              href="https://github.com/siyegs"
              className="flex items-center mx-4"
            >
              <FiArrowUpRight className="mr-2" /> github
            </a>
            <a
              href="https://x.com/iyegere_success"
              className="flex items-center mx-4"
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
