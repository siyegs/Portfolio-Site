import { useRef, useEffect, type ReactNode } from "react";

import Header from "./Header";

interface LayoutProps {
  theme: string;
  toggleTheme: () => void;
  children: ReactNode;
  hoveredName?: string | null;
}

const Layout: React.FC<LayoutProps> = ({
  theme,
  toggleTheme,
  children,
  hoveredName,
}) => {
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

      {children}
    </>
  );
};

export default Layout;
