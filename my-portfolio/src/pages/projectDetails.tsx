import { useParams, useNavigate } from "react-router-dom";
import projectsData from "../data/projectsData";
import Layout from "../components/Layout";
import { FiExternalLink, FiArrowLeft } from "react-icons/fi";

interface ProjectDetailsPageProps {
  theme: string;
  toggleTheme: () => void;
  hoveredName: string | null;
}

const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = ({
  theme,
  toggleTheme,
  hoveredName,
}) => {
  const { slugTextId } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.slug === slugTextId);

  document.title = project ? `${project.title} | ISK` : "Project Not Found | ISK";

  if (!project) {
    return (
      <Layout theme={theme} toggleTheme={toggleTheme} hoveredName={hoveredName}>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded bg-[#aab2d1] text-[#18181b] font-semibold"
          >
            Go Back
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout theme={theme} toggleTheme={toggleTheme} hoveredName={hoveredName}>
      <div
        className={`min-h-screen flex flex-col items-center px-5 pt-36 pb-16 ${
          theme === "dark"
            ? "bg-[#18181b]/90 text-[#f3f2f9]"
            : "bg-[#f3f2f9]/90 text-[#18181b]"
        }`}
        style={{ fontFamily: "Space Grotesk" }}
      >
        <button
          onClick={() => navigate("/projects")}
          className="flex items-center gap-2 mb-8 text-base font-semibold hover:underline"
        >
          <FiArrowLeft /> Back to Projects
        </button>
        <div className="w-full lg:w-[90%] grid lg:grid-cols-2 gap-8 items-center justify-center justify-items-center">
          <div className="">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 text-left">
              {project.title}
            </h1>

            {/* project description */}
            <p className="text-[clamp(18px,4vw,21px)] mb-6">
              {project.description}
            </p>

            {/* tech stack */}
            <div className="flex gap-2 mb-4 flex-wrap">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    theme === "dark"
                      ? "bg-[#1a1a22] text-[#aab2d1] border-[#333]"
                      : "bg-[#f3f2f9] text-[#18181b] border-[#ccc]"
                  }`}
                >
                  {tool}
                </span>
              ))}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 px-3 pl-4 py-2 rounded-full bg-[#aab2d1] text-[#18181b] font-semibold hover:bg-[#e5e7eb] transition text-[12.5px]"
            >
              Visit Live Site <FiExternalLink />
            </a>
          </div>

          <div
            className={`rounded-lg w-full max-md:max-w-[560px] max-w-[800px] flex items-center justify-center mt-9 hover:scale-95 transition-all duration-200`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetailsPage;
