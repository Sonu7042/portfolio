import React from "react";
import { projectData } from "../data/Static";

const Project = () => {
  return (
    <div
      name="projects"
      className="w-full bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 py-12  lg:py-32"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center  h-full text-white">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">
            Projects
          </p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center pt-8 w-full ">
          {projectData.map((project, index) => (
            <div key={index} className="border-2 border-gray-300 rounded-lg shadow-md overflow-hidden w-full md:max-w-sm lg:max-w-sm">
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-white mt-2">{project.description}</p>

                <div className="rounded">
                  <img
                    src={project.imageUrl}
                    alt={"image"}
                    className="w-full h-40 object-cover rounded"
                  />
                </div>

                <div className="mt-4 flex justify-center gap-4">
                  <a
                    href={project.deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
                  >
                    Deploy Link
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
                  >
                    GitHub Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
