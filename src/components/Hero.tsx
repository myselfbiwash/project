import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { PersonalInfo } from '../types/portfolio';
import BiwashImage from '../assets/Biwash.jpg';

interface HeroProps {
  data: PersonalInfo;
}

export function Hero({ data }: HeroProps) {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm {data.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 mb-8">
              {data.title}
            </h2>
            <p className="text-lg mb-8 max-w-2xl">
              {data.bio}
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href={data.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href={data.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href={data.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent animate-spin-slow" />
              <img
                // src={data.avatar}
                src={BiwashImage}
                alt='Hero Image'
                className="absolute inset-2 rounded-full  object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}