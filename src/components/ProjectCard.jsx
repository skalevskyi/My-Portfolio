// src/components/ProjectCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, stack, image, demoLink, repoLink }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gray-100 dark:bg-[#1e293b] rounded-xl shadow-xl p-4 hover:scale-[1.02] transition duration-300 relative h-full flex flex-col justify-between"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded mb-4 cursor-pointer hover:brightness-110"
          onClick={() => setModalOpen(true)}
        />
        <div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{description}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Stack: {stack}</p>
        </div>
        <div className="flex gap-3 mt-auto pt-4">
          <motion.a
            href={demoLink}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 text-center px-4 py-2 rounded-md bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition"
          >
            Demo
          </motion.a>
          <motion.a
            href={repoLink}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 text-center px-4 py-2 rounded-md bg-gray-300 dark:bg-gray-600 dark:text-white font-medium shadow-md hover:bg-gray-400 dark:hover:bg-gray-500 transition"
          >
            Repo
          </motion.a>
        </div>
      </motion.div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <img
            src={image}
            alt={title}
            className="max-w-[80vw] max-h-[80vh] object-contain rounded shadow-lg"
          />
        </div>
      )}
    </>
  );
};

export default ProjectCard;
