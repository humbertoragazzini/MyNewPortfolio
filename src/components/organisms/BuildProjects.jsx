import { useContext } from "react";
import Project from "../molecules/project/Project";
import ProjectLeft from "../molecules/project/ProjectLeft";
import ProjectRight from "../molecules/project/ProjectRight";
import { AppContext } from "../../context/AppContext";

export default function BuildProjects({ projects }) {
  const { language, changeSelectedProject } = useContext(AppContext);
  return (
    <>
      {projects.map((project) => {
        if (project.orientation == "left") {
          return (
            <ProjectLeft
              positionZ={project.positionZ}
              language={language}
              projectId={project.projectId}
              images={project.images}
            >
              <Project
                language={language}
                content={{
                  projectName: project.projectName,
                  description: project.description,
                  technologies: project.technologies,
                  links: project.links,
                  images: project.images,
                  video: project.video,
                  gif: project.gif,
                  embeded: project.embeded,
                }}
                changeSelectedProject={changeSelectedProject}
              ></Project>
            </ProjectLeft>
          );
        }
        if (project.orientation == "right") {
          return (
            <ProjectRight
              positionZ={project.positionZ}
              language={language}
              projectId={project.projectId}
              images={project.images}
            >
              <Project
                language={language}
                content={{
                  projectName: project.projectName,
                  description: project.description,
                  technologies: project.technologies,
                  links: project.links,
                  images: project.images,
                  video: project.video,
                  gif: project.gif,
                  embeded: project.embeded,
                }}
                changeSelectedProject={changeSelectedProject}
              ></Project>
            </ProjectRight>
          );
        }
      })}
    </>
  );
}
