import { useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "../components/Scene";
import { FiArrowRight } from "react-icons/fi";
import "../App.css";
import Header from "../components/Header";

interface LandingPageProps {
  theme: string;
  toggleTheme: () => void;
}

const LandingPage = ({ theme, toggleTheme }: LandingPageProps) => {
  const [hoveredName, setHoveredName] = useState<string | null>(null);
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
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div
        ref={cursorRef}
        className={`cursor ${hoveredName ? "hovered" : ""}`}
      />
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      >
        <Scene hoveredName={hoveredName} />
      </Canvas>
      <div
        className="main-container px-2"
        style={{ fontFamily: "Special Gothic Expanded One" }}
      >
        <h1
          style={{ fontSize: "clamp(27px, 2vw, 37px)" }}
          className="leading-[1.3] inverse-text"
        >
          <span className="stroked-text text-transparent stroke-slate-100">
            HEY, I'M{" "}
          </span>{" "}
          <br />
          <span
            className="text-[#aab2d1] italic font-black"
            onMouseEnter={() => setHoveredName("IYEGERE")}
            onMouseLeave={() => setHoveredName(null)}
          >
            IY
            <span className="w-fill inline-block scale-x-150 pr-[3px]">E</span>G
            <span className="w-fill inline-block scale-x-150 pr-[3px]">E</span>R
            <span className="w-fill inline-block scale-x-150 pr-[3px]">E</span>
          </span>{" "}
          {/* <br /> */}
          <span
            className="text-[#aab2d1] italic font-black"
            onMouseEnter={() => setHoveredName("SUCCESS")}
            onMouseLeave={() => setHoveredName(null)}
          >
            SUCC
            <span className="w-fill inline-block scale-x-150 pr-[3px]">E</span>
            SS
          </span>
          <br />
          <span className="stroked-text text-transparent">
            BUT YOU CAN CALL <br /> ME{" "}
          </span>
          <span
            className="text-[#aab2d1] italic font-black"
            onMouseEnter={() => setHoveredName("KARBOLOO")}
            onMouseLeave={() => setHoveredName(null)}
          >
            KARBOLOO
          </span>
        </h1>
        <p
          className="px-3"
          style={{
            fontSize: "clamp(15px, 2vw, 19px)",
          }}
        >
          I'm a frontend web developer, web designer & UX/UI designer
        </p>

        <div
          className="pt-6 grid gap-y-5"
          style={{ fontFamily: "Space Grotesk" }}
        >
          <p
            className="flex items-center dynamic-text"
            style={{
              fontSize: "clamp(16px, 2vw, 19px)",
            }}
          >
            <FiArrowRight
              className="mr-2"
              style={{ fontSize: "clamp(17.5px, 2vw, 19px)" }}
            />
            <span className="underline-hover">
              see my{" "}
              <span className="pl-[4px] inline-block scale-x-150">p</span>
              rojects
            </span>
          </p>
          <p
            className="flex items-center dynamic-text"
            style={{
              fontSize: "clamp(16px, 2vw, 19px)",
            }}
          >
            <FiArrowRight
              className="mr-2"
              style={{ fontSize: "clamp(17.5px, 2vw, 19px)" }}
            />
            <span className="underline-hover">
              more
              <span className="pl-[4px] inline-block scale-x-150">a</span>
              <span className="scale-x-150">b</span>o
              <span className="scale-x-150">u</span>
              <span className="scale-x-150">t</span>
              <span className="ml-1">me</span>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
