import React from "react";
import Layout from "../components/Layout";
import { useRef, useEffect } from "react";
import resumePDF from "../assets/IyegereSuccessResume.pdf";

interface AboutPageProps {
  theme: string;
  toggleTheme: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ theme, toggleTheme }) => {
  document.title = "ISK | About";
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      <div className="main-container relative z-[1] text-white flex flex-col justify-center items-center h-screen px-5">
        <div className="flex flex-col md:flex-row items-center md:gap-12 max-w-5xl w-full">
          {/* Image Column */}
          <div className="w-full sm:w-1/2 md:w-1/3 md:order-last mt-[330px] md:mt-20 flex items-center">
            <img
              src="src/assets/WhatsApp Image 2025-06-28 at 09.22.34_0602184e.jpg"
              alt="Iyegere Success"
              className="rounded-lg w-full shadow-lg  h-[80%] object-cover"
            />
          </div>

          {/* Text Column */}
          <div className="w-full md:w-2/3 md:text-left">
            <h1
              className="font-bold mb-2  text-[#aab2d1]"
              style={{ fontSize: "clamp(12px, 12em, 55px)" }}
            >
              A
              <span className="mx-1 px-[3px] inline-block scale-x-[1.5]">
                B
              </span>
              OUT
            </h1>
            <hr className={`border`} />
            <p
              className={`text-lg sm:text-xl mt-5 mb-8 bg-[#6e6e7197] p-6 rounded-lg text-[whitesmoke]`}
              style={{ fontFamily: "Space Grotesk" }}
            >
              Hey, my name is Iyegere Success. I'm a frontend web developer, web designer & and Pharmacologist. I'm also passionate about creative coding and I'm always curious to learn more when it comes to new technologies.
            </p>
            <a
              href={resumePDF}
              download="IyegereSuccessResume.pdf"
              className={`inline-block py-2 px-6 rounded-full font-bold text-lg hover:bg-[#aab2d1] hover:text-black transition-colors duration-300 border border-[#aab2d1] mb-12`}
              style={{ fontFamily: "Space Grotesk" }}
            >
              ↓ Resumé
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
