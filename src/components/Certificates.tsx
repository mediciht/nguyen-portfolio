import { motion } from "framer-motion";
import { Award } from "lucide-react";

const getImageUrl = (path: string) => {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`;
};

const certificates = [
  {
    name: "CKA: Certified Kubernetes Administrator",
    issuer: "The Linux Foundation",
    date: "2022",
    icon: Award,
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    date: "2023",
    icon: Award,
  },
  {
    name: "Splunk Core Certified Power User",
    issuer: "Splunk",
    date: "2025",
    icon: Award,
  },
  {
    name: "Azure Administrator Associate",
    issuer: "Microsoft",
    date: "2020",
    icon: Award,
  },
];

const Certificates = () => {
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
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-3 py-1 text-sm font-medium bg-accent-purple/10 text-accent-purple rounded-full">
            Certifications
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Professional Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent-purple/10 rounded-lg">
                  <Award className="h-6 w-6 text-accent-purple" />
                </div>
                <div className="text-sm text-accent-purple">{cert.issuer}</div>
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-2">{cert.name}</div>
              <div className="text-sm text-gray-600">{cert.date}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 