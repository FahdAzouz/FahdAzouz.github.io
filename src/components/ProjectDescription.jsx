import React from 'react';

const ProjectDescription = ({ project }) => {
  return (
    <div className="bg-neutrals-800 text-neutrals-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <p className="text-xl mb-4 text-neutrals-300">{project.shortDescription}</p>
      
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Key Features:</h3>
        <ul className="list-disc list-inside space-y-2">
          {project.fullDescription.split('\n\n').map((paragraph, index) => (
            <li key={index} className="ml-4">{paragraph.trim()}</li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Technologies Used:</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-primary text-neutrals-50 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-secondary text-neutrals-50 px-4 py-2 rounded hover:bg-secondary/80 transition-colors"
      >
        <span className="mr-2">&#128279;</span> {/* Unicode link symbol */}
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectDescription;