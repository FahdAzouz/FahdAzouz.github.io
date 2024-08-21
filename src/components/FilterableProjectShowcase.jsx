import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FilterableProjectShowcase = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const technologies = useMemo(() => {
    const techs = new Set(projects.flatMap(project => project.technologies));
    return ['All', ...Array.from(techs)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return filter === 'All'
      ? projects
      : projects.filter(project => project.technologies.includes(filter));
  }, [projects, filter]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        {technologies.map((tech) => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`px-4 py-2 rounded-full ${
              filter === tech
                ? 'bg-primary text-white'
                : 'bg-neutrals-700 text-neutrals-300 hover:bg-neutrals-600'
            } transition-colors`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.slug}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-neutrals-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className={`relative ${!project.completed ? 'project-incomplete' : ''}`}>
              {project.images && project.images.length > 0 ? (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-neutrals-700 flex items-center justify-center">
                  <span className="text-neutrals-400">No image available</span>
                </div>
              )}
              {!project.completed && (
                <div className="absolute inset-0 bg-neutrals-900 bg-opacity-70 flex items-center justify-center">
                  <p className="text-neutrals-300 text-lg">Coming Soon</p>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-neutrals-300 mb-4">{project.shortDescription}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-neutrals-800 p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-neutrals-300 mb-4">{selectedProject.fullDescription}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="bg-primary text-white px-2 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              {selectedProject.completed && (
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-4 py-2 rounded-full inline-block hover:bg-primary-dark transition-colors"
                >
                  View on GitHub
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterableProjectShowcase;