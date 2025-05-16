import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6 flex flex-col items-center justify-center text-center relative">
      {/* 🔓 Logout Button */}
      <button
        onClick={logout}
        className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>

      <motion.h1
        className="text-4xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        👋 Welcome Back, {user?.username}!
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Here's what's happening in your app today 🌟
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full mt-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {[
          { emoji: '📅', title: 'Today', desc: 'You have no pending tasks.' },
          { emoji: '📊', title: 'Stats', desc: 'Everything is running smoothly!' },
          { emoji: '🔒', title: 'Security', desc: 'Your data is safe and encrypted.' },
          { emoji: '🛠️', title: 'Tools', desc: 'New features under development.' },
          { emoji: '☁️', title: 'Cloud', desc: 'All backups are up-to-date.' },
          { emoji: '💡', title: 'Tips', desc: 'Stay consistent and productive!' },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-xl transition"
            whileHover={{ scale: 1.03 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="text-4xl mb-2">{item.emoji}</div>
            <h2 className="text-xl font-semibold mb-1">{item.title}</h2>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Dashboard;
