
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Tech Corp",
    position: "Senior DevOps Engineer",
    period: "2021 - Present",
    description: "Leading cloud infrastructure and deployment automation initiatives.",
  },
  {
    company: "Innovation Labs",
    position: "DevOps Engineer",
    period: "2019 - 2021",
    description: "Implemented CI/CD pipelines and containerization strategies.",
  },
  {
    company: "StartUp Inc",
    position: "Systems Engineer",
    period: "2017 - 2019",
    description: "Managed cloud infrastructure and automated deployment processes.",
  },
];

const Experience = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
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

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-accent-purple" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                <p className="text-accent-purple mt-1">{exp.company}</p>
                <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                <p className="mt-3 text-gray-600">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
