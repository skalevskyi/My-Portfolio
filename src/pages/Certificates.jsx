// src/pages/Certificates.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Certificates = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="p-6 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">{t('certificates')}</h2>
      <ProjectCard
        title={t('certificates')}
        description={t('certificates_description')}
        stack="Static HTML, TailwindCSS"
        image="/images/certificates.png"
        demoLink="https://skalevskyi.github.io/certificates/"
        repoLink="https://github.com/skalevskyi/certificates"
      />
    </motion.div>
  );
};

export default Certificates;
