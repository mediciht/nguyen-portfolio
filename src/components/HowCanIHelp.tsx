import { motion } from "framer-motion";
import { 
  MonitorCheck, 
  Cloud, 
  Workflow, 
  GitBranch, 
  FileCode, 
  Wrench, 
  FileText, 
  TestTube,
  Mail
} from "lucide-react";

const getImageUrl = (path: string) => {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`;
};

const services = [
  {
    icon: MonitorCheck,
    title: "Monitoring Solutions",
    description: "Consult and deploy monitoring solutions for your platform and applications."
  },
  {
    icon: Cloud,
    title: "Multi-Platform Deployment",
    description: "Deploy your application on multiple platforms, including on-premises and cloud platforms like AWS."
  },
  {
    icon: Workflow,
    title: "Automation Workflows",
    description: "Create automation workflows to manage your infrastructure: monitoring, alerting, patching, and more."
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipeline",
    description: "Set up CI/CD pipelines to automate the development and release process using GitLab."
  },
  {
    icon: FileCode,
    title: "Python Development",
    description: "Develop Python applications."
  },
  {
    icon: Wrench,
    title: "Troubleshooting",
    description: "Troubleshoot issues and incidents on web servers, Linux servers, Docker and Python applications."
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Optimize and document your system."
  },
  {
    icon: TestTube,
    title: "Testing",
    description: "Create test scenarios for your web or API applications using Selenium, Postman, and Newman."
  },
  {
    icon: Mail,
    title: "Want to Know More?",
    description: "Have a specific requirement or need more details? Contact me directly to discuss how I can help with your project."
  }
];

const HowCanIHelp = () => {
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
            Services
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            How Can I Help?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent-purple/10 rounded-lg">
                  <service.icon className="h-6 w-6 text-accent-purple" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Why Work with Me panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Work with Me?</h3>
            <p className="text-gray-600">
              When you work with me, the solutions I deliver are reusable and thoroughly documented. 
              I believe my contributions will help you enhance your current platform and applications, 
              ensuring long-term efficiency and maintainability.
            </p>
          </motion.div>

          {/* Contact Me panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Me</h3>
            <p className="text-gray-600 mb-6">
              I'm happy to discuss how I can help with your project.
            </p>
            <a
              href="mailto:trannguyenptit@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-purple text-white rounded-lg hover:bg-accent-purple/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Me Directly
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowCanIHelp; 