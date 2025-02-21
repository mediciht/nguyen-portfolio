import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3 // Adjust this value to make background lighter or darker
        }}
      />
      
      {/* Content with relative positioning to appear above background */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <Avatar className="h-24 w-24">
            <AvatarImage src="/images/avatar.jpg" alt="Your Name" />
            <AvatarFallback>YN</AvatarFallback>
          </Avatar>
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
          Hi, I'm Nguyen, a Monitoring/DevOps professional committed to optimizing IT system reliability and performance. With expertise in deploying and managing monitoring solutions, automating infrastructure configurations, and developing custom applications, I focus on creating efficient, reliable systems tailored to specific needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="https://www.linkedin.com/in/nguyen-tran-620a9a244/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-gray-900 border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          
          <a
            href="https://github.com/mediciht"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-gray-900 border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>

          <a
            href="https://www.upwork.com/nguyen153"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-gray-900 border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Upwork
          </a>

          <a
            href="mailto:trannguyenptit@gmail.com"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold bg-accent-purple text-white shadow-sm hover:bg-accent-purple/90 transition-colors"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
