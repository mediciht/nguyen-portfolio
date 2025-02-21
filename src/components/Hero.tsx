
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-3 py-1 text-sm font-medium bg-accent-purple/10 text-accent-purple rounded-full">
            DevOps Engineer
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900"
        >
          Monitoring & Automating Everything You Have
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
        >
          Experienced Monitoring/DevOps professional specializing in IT reliability, monitoring solutions, infrastructure automation, and custom applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-x-6"
        >
          <a
            href="#contact"
            className="rounded-lg px-6 py-3 text-sm font-semibold bg-accent-purple text-white shadow-sm hover:bg-accent-purple/90 transition-colors"
          >
            Get in touch
          </a>
          <a
            href="https://github.com"
            className="flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-gray-900 border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <Github className="h-4 w-4" />
            View GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
