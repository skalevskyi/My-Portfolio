import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi'; // 🌞 🌙
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ toggleTheme, currentTheme, changeLanguage }) => {
  const location = useLocation();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'home', path: '/' },
    { name: 'projects', path: '/projects' },
    { name: 'certificates', path: '/certificates' },
    { name: 'contact', path: '/contact' },
  ];

  return (
    <nav className="bg-slate-200 dark:bg-slate-800 shadow py-4">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold">My Portfolio</div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className={`px-3 py-2 rounded transition ${location.pathname === path
                ? 'bg-blue-600 text-white shadow-md'
                : 'hover:bg-slate-300 dark:hover:bg-slate-700'
                }`}
            >
              {t(name)}
            </Link>
          ))}

          <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="rounded px-2 py-1 text-sm border border-slate-400 bg-slate-200 dark:bg-slate-800 dark:text-white"
          >
            <option value="ua">UA</option>
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 transition text-slate-800 dark:text-white"
          >
            {currentTheme === 'dark' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile sidebar (залишається без змін) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 w-full bg-slate-200 dark:bg-slate-800 z-50 flex flex-col items-start p-4 gap-3 shadow-md"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map(({ name, path }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={`w-full py-2 px-4 rounded ${location.pathname === path
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-slate-300 dark:hover:bg-slate-700'
                    }`}
                >
                  {t(name)}
                </Link>
              ))}

              <div className="w-full flex items-center justify-between gap-4 mt-2">
                <select
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="flex-1 rounded px-2 py-1 text-sm border border-slate-400 bg-slate-200 dark:bg-slate-800 dark:text-white"
                >
                  <option value="ua">UA</option>
                  <option value="en">EN</option>
                  <option value="fr">FR</option>
                </select>

                <button
                  onClick={toggleTheme}
                  className="p-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 rounded text-slate-800 dark:text-white"
                  aria-label="Toggle theme"
                >
                  {currentTheme === 'dark' ? <FiMoon size={18} /> : <FiSun size={18} />}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

  );
};

export default Navbar;
