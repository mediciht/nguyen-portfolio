
import { motion } from "framer-motion";

const technologies = [
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "Containerization" },
  { name: "Kubernetes", category: "Orchestration" },
  { name: "Terraform", category: "IaC" },
  { name: "Jenkins", category: "CI/CD" },
  { name: "Git", category: "Version Control" },
  { name: "Ansible", category: "Configuration Management" },
  { name: "Prometheus", category: "Monitoring" },
  { name: "ELK Stack", category: "Logging" },
  { name: "Python", category: "Programming" },
];

const TechStack = () => {
  return (
    <section className="py-24 px-4 bg-accent-light">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-3 py-1 text-sm font-medium bg-accent-purple/10 text-accent-purple rounded-full">
            Technology Stack
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Tools & Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-sm text-accent-purple mb-2">{tech.category}</div>
              <div className="text-xl font-semibold text-gray-900">{tech.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
