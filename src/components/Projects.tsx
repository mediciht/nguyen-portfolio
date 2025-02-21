
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Cloud Migration Framework",
    description: "Developed a framework for seamless migration of legacy applications to cloud infrastructure.",
    tech: ["AWS", "Terraform", "Docker"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    title: "Automated Deployment Pipeline",
    description: "Built a robust CI/CD pipeline reducing deployment time by 70%.",
    tech: ["Jenkins", "Kubernetes", "Ansible"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    title: "Monitoring Solution",
    description: "Implemented comprehensive monitoring and alerting system.",
    tech: ["Prometheus", "Grafana", "ELK Stack"],
    links: {
      github: "#",
      live: "#",
    },
  },
];

const Projects = () => {
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
            Featured Work
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Recent Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              <p className="mt-3 text-gray-600">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium bg-accent-purple/10 text-accent-purple rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-4">
                <a
                  href={project.links.github}
                  className="text-gray-600 hover:text-accent-purple transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={project.links.live}
                  className="text-gray-600 hover:text-accent-purple transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
