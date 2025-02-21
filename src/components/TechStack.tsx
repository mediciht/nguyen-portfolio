
import { motion } from "framer-motion";
import { 
  Cloud, 
  Code, 
  Container, 
  GitBranch,
  Database,
  LineChart,
  FileCode,
  Settings
} from "lucide-react";

const technologies = [
  { 
    name: "AWS", 
    category: "Cloud",
    icon: Cloud
  },
  {
    name: "Monitoring Stack",
    category: "Monitoring",
    details: "Splunk, Zabbix, Datadog, Grafana",
    icon: LineChart
  },
  {
    name: "Splunk",
    category: "Logging",
    icon: Database
  },
  {
    name: "Python",
    category: "Programming",
    icon: Code
  },
  {
    name: "GitlabCI",
    category: "CI/CD",
    icon: GitBranch
  },
  {
    name: "Kubernetes & Docker",
    category: "Containerization",
    details: "Container orchestration & virtualization",
    icon: Container
  },
  {
    name: "Terraform",
    category: "IaC",
    icon: FileCode
  },
  {
    name: "Ansible",
    category: "Configuration Management",
    icon: Settings
  },
  {
    name: "Databases",
    category: "Other",
    details: "Redis, MongoDB, PostgreSQL",
    icon: Database
  },
];

const TechStack = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-accent-light to-white"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(155, 135, 245, 0.1) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}
      />
      
      <div className="max-w-6xl mx-auto relative">
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
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-accent-purple/10 rounded-lg">
                    <Icon className="h-6 w-6 text-accent-purple" />
                  </div>
                  <div className="text-sm text-accent-purple">{tech.category}</div>
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{tech.name}</div>
                {tech.details && (
                  <p className="text-sm text-gray-600">{tech.details}</p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
