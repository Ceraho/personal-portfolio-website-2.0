import { data } from "../../content/projects.json";
import LinkedProjectCard from "../card/project-card";

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="h-full in-h-screen w-full flex flex-col justify-center gap-10 p-4 pt-36 md:p-36 md:pt-40"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-center">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.projects.map((project, idx) => {
          return <LinkedProjectCard project={project} key={idx} />;
        })}
      </div>
    </section>
  );
}

export default ProjectsSection;
