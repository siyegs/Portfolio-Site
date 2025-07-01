import React from "react";
import Layout from "../components/Layout";
import { FiArrowUpRight } from "react-icons/fi";
import "../App.css";

interface ContactPageProps {
  theme: string;
  toggleTheme: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ theme, toggleTheme }) => {
  document.title = "ISK | Contact"
  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      <div
        className="main-container relative z-[1] text-white flex flex-col justify-center items-center h-screen px-5"
        style={{ fontFamily: "Space Grotesk" }}
      >
        <div className="w-full max-w-md">
          <h1 className="font-bold text-[#aab2d1]" style={{fontSize: "clamp(29px, 6vw, 65px)"}}>CONTACT</h1>

          <hr className="w-full border-[#aab2d1] mb-7" />

          <div className="md:flex md:justify-between">
            <div>
              <h2 className="text-sm uppercase text-[#aab2d1] tracking-widest mb-3">
                Mail
              </h2>
              <ul className="flex mb-8 items-center">
                <li>
                  <FiArrowUpRight className="mr-3" />
                </li>
                <li>
                  <a
                    href="mailto:iyegeresuccess@gmail.com"
                    className="underline-hover text-lg"
                  >
                    iyegeresuccess@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm uppercase text-[#aab2d1] tracking-widest mb-3">
                Links
              </h2>
              <ul>
                <li className="flex items-center">
                  <FiArrowUpRight className="mr-3" />
                  <a
                    href="https://github.com/siyegs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-hover text-lg"
                  >
                    github
                  </a>
                </li>

                <li className="flex items-center">
                  <FiArrowUpRight className="mr-3" />
                  <a
                    href="https://linkedin.com/in/iyegere-success-1b1b1b1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-hover text-lg"
                  >
                    linkedIn
                  </a>
                </li>

                <li className="flex items-center">
                  <FiArrowUpRight className="mr-3" />
                  <a
                    href="https://x.com/iyegere_success"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-hover text-lg"
                  >
                    x
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
