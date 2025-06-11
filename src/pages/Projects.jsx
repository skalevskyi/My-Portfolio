// src/pages/Projects.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      key: 'montpellier',
      title: 'Montpellier Guide',
      stack: 'React, TailwindCSS',
      image: '/images/montpellier.png',
      demoLink: 'https://skalevskyi.github.io/Montpellier/',
      repoLink: 'https://github.com/skalevskyi/Montpellier',
    },
    {
      key: 'currency',
      title: 'Currency Converter',
      stack: 'HTML, CSS, JS, Fetch API',
      image: '/images/currency-converter.png',
      demoLink: 'https://skalevskyi.github.io/currency-converter-app/',
      repoLink: 'https://github.com/skalevskyi/currency-converter-app',
    },
    {
      key: 'weather',
      title: 'Weather App',
      stack: 'JavaScript, Fetch API',
      image: '/images/weather-app.png',
      demoLink: 'https://skalevskyi.github.io/Weather-App-API/',
      repoLink: 'https://github.com/skalevskyi/Weather-App-API',
    },
    {
      key: 'qr',
      title: 'QR Code Generator',
      stack: 'JavaScript, HTML, CSS',
      image: '/images/qr-code.png',
      demoLink: 'https://skalevskyi.github.io/QR-Code-Generator/',
      repoLink: 'https://github.com/skalevskyi/QR-Code-Generator',
    },
    {
      key: 'login',
      title: 'Animated Login',
      stack: 'HTML, CSS, JavaScript',
      image: '/images/animated-login.png',
      demoLink: 'https://skalevskyi.github.io/Animated-Login/',
      repoLink: 'https://github.com/skalevskyi/Animated-Login',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">{t('projects.title')}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(({ key, title, stack, image, demoLink, repoLink }) => (
          <ProjectCard
            key={key}
            title={title}
            description={t(`projects.${key}.description`)}
            stack={stack}
            image={image}
            demoLink={demoLink}
            repoLink={repoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
