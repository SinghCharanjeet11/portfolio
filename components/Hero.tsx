import React from 'react';
import { motion } from 'framer-motion';
import { PersonalProfile } from '../types/profile';

export interface HeroProps {
  profile: PersonalProfile;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src={profile.profileImage.src}
          alt={profile.profileImage.alt}
          className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-white/30 object-cover"
        />
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          {profile.name}
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-3xl mb-6 text-blue-200"
        >
          {profile.title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl mb-8 text-gray-300"
        >
          {profile.tagline}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Get In Touch
          </a>
          <a
            href="#portfolio"
            className="px-8 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition"
          >
            View Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};
