import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const getImageUrl = (path: string) => {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`;
};

const projects = [
  {
    title: "Monitoring Solution",
    description: "Deploy and Maintain monitoring service for large infra, cover IaaS, PaaS and SaaS.",
    tech: ["Zabbix", "Datadog", "Grafana", "Terraform", "linux"],

  },
  {
    title: "Automated Deployment Pipeline",
    description: "Built a robust CI/CD pipeline reducing deployment time, ensures consistent and reliable releases, reducing manual intervention.",
    tech: ["Gitlab", "Docker", "Kubernetes", "Postman", "yml"],
  },
  {
    title: "Event-Driven Application",
    description: "Design and build an event-driven app to handle massive monitoring events, with the capability to integrate with multiple event sources and custom logic for event handling.",
    tech: ["Python Flask", "RabbitMQ", "MongoDB", "Docker", "Redis"],
  },
  {
    title: "Splunk App Deployment",
    description: "Manage Splunk clusters with Ansible, develop Splunk apps, audit the Splunk platform, and create custom dashboards and reports.",
    tech: ["Splunk", "Ansible", "Python", "linux"],
  },
];

const Projects = () => {
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
            Featured Work
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Recent Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
