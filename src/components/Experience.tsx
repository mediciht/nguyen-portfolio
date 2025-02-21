import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const getImageUrl = (path: string) => {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`;
};

const experiences = [
  {
    company: "Linkbynet/Accenture",
    position: "DevOps Monitoring",
    period: "01/2023 - Present",
    description: "Design, develop and maintain automation tools/apps support operation monitoring and incident handling.",
  },
  {
    company: "Linkbynet",
    position: "Monitoring Engineer",
    period: "01/2022 - 12/2022",
    description: "Deploy and maintain monitoring solution for large infra.",
  },
  {
    company: "TMA Solutions",
    position: "QA Engineer",
    period: "06/2019 - 12/2021",
    description: "Build and develop automation test for SIP and android phone.",
  },
];

const Experience = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${getImageUrl('/images/background.jpg')}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-3 py-1 text-sm font-medium bg-accent-purple/10 text-accent-purple rounded-full">
            Work Experience
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Professional Journey
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-8 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-accent-purple" />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900">{experience.position}</h3>
                <div className="mt-1 flex items-center gap-2 text-sm text-accent-purple">
                  <span>{experience.company}</span>
                  <span>•</span>
                  <span>{experience.period}</span>
                </div>
                <p className="mt-2 text-gray-600">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
