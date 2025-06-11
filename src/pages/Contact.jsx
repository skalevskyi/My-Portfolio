import React from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaTelegram,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { motion } from 'framer-motion'; // ✅ додано

const contacts = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    href: 'mailto:s.skalevskyi@gmail.com',
    value: 's.skalevskyi@gmail.com',
  },
  {
    icon: <FaTelegram />,
    label: 'Telegram',
    href: 'https://t.me/skalevskyi',
    value: '@skalevskyi',
  },
  {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    href: 'https://wa.me/33769115207',
    value: '+33 7 69 11 52 07',
  },
  {
    icon: <FaPhone />,
    label: 'Телефон',
    href: 'tel:+380687976279',
    value: '+38 068 797 62 79',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/skalevskyi/',
    value: 'linkedin.com/in/skalevskyi',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    href: 'https://github.com/skalevskyi',
    value: 'github.com/skalevskyi',
  },
];

const Contact = () => {
  return (
    <motion.div
      className="p-6 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {contacts.map(({ icon, label, href, value }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded shadow-md bg-slate-100 dark:bg-slate-700 
                       hover:bg-blue-100 dark:hover:bg-blue-600 
                       hover:text-blue-800 dark:hover:text-white 
                       transition-all duration-200 ease-in-out transform 
                       hover:-translate-y-1 active:scale-95"
          >
            <span className="text-2xl">{icon}</span>
            <div className="flex flex-col">
              <span className="font-semibold">{label}</span>
              <span className="text-sm break-words text-gray-600 dark:text-gray-300">{value}</span>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default Contact;
