import React from 'react';
import Layout from '../components/Layout';
interface WorkPageProps {
  theme: string;
  toggleTheme: () => void;
}

const WorkPage: React.FC<WorkPageProps> = ({ theme, toggleTheme }) => {
  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      <div className="main-container relative z-[1] text-white flex flex-col justify-center items-center h-screen text-center px-2">
        <h1>Projects Page</h1>
      </div>
    </Layout>
  );
};

export default WorkPage;
