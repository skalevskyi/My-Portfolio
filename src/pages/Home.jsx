import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      className="max-w-4xl mx-auto text-center mt-12 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src="/images/avatar.png"
        alt="Profile"
        className="w-40 h-40 object-cover rounded-full mx-auto shadow-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-2">{t('greeting')}</h1>
      <h2 className="text-xl font-semibold text-slate-600 dark:text-slate-300 mb-4">
        {t('greeting_sub')}
      </h2>
      <p className="text-base mb-6 text-slate-700 dark:text-slate-300">
        {t('greeting_sub_extra')}
      </p>
      <Link
        to="/contact"
        className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
      >
        {t('contact')}
      </Link>
    </motion.section>
  );
};

export default Home;
