// src/pages/HomePage.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-4 text-center">
      {/* Title */}
      <motion.h1
        className="text-5xl font-extrabold text-gray-800 mb-6"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to <span className="text-blue-600">SecureAuth 🔐</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg text-gray-700 mb-6 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Empower your users with seamless <span className="font-medium text-purple-600">login</span>,{' '}
        <span className="font-medium text-purple-600">registration</span>, and{' '}
        <span className="font-medium text-purple-600">password recovery</span> experience. 🚀
      </motion.p>

      {/* Animation */}
      <motion.div
        className="w-40 h-40 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full shadow-lg mb-10 animate-bounce"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      />

      {/* Call to Action */}
      <motion.button
        onClick={() => navigate('/login')}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🚀 Get Started
      </motion.button>

      {/* Footer Emojis */}
      <div className="mt-10 text-2xl">🔐 💻 🌐 ✨ ❤️ 🔄</div>
    </div>
  );
};

export default HomePage;
