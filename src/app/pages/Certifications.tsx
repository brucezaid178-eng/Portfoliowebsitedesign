import { motion } from "motion/react";
import { FileCheck, Building, Calendar, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    date: "February 2025",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    description: "Advanced certification demonstrating expertise in designing distributed systems and architectures on AWS cloud platform. Covers scalability, security, and cost optimization strategies.",
    skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization"],
  },
  {
    id: 2,
    title: "Machine Learning Specialist",
    issuer: "Google Cloud",
    date: "December 2024",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",
    description: "Comprehensive certification in ML model development, deployment, and optimization. Includes neural networks, deep learning, and production ML systems.",
    skills: ["TensorFlow", "Neural Networks", "Model Deployment", "ML Ops"],
  },
  {
    id: 3,
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "October 2024",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800",
    description: "Expert-level certification in Kubernetes cluster administration, deployment, and troubleshooting. Covers container orchestration and cloud-native applications.",
    skills: ["Kubernetes", "Docker", "DevOps", "Container Orchestration"],
  },
  {
    id: 4,
    title: "Full Stack Web Development",
    issuer: "Meta",
    date: "August 2024",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800",
    description: "Professional certification in modern web development covering React, Node.js, databases, and deployment strategies. End-to-end web application development.",
    skills: ["React", "Node.js", "MongoDB", "REST APIs"],
  },
];

export function Certifications() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 relative"
          >
            <FileCheck className="w-10 h-10 text-white" />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute inset-0 rounded-3xl bg-cyan-500/50 blur-xl"
            />
          </motion.div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h1>
          <p className="text-slate-400 text-lg">Professional credentials & expertise</p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/60 backdrop-blur-xl rounded-3xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all overflow-hidden h-full"
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                  {/* Floating Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", delay: index * 0.15 + 0.3 }}
                    className="absolute top-4 right-4 p-3 bg-cyan-600/90 backdrop-blur-sm rounded-2xl border border-cyan-400/30"
                  >
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative p-6 space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-blue-400 transition-all">
                      {cert.title}
                    </h2>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-cyan-400" />
                        <span>{cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.15 + skillIndex * 0.05 + 0.5 }}
                        className="px-3 py-1.5 bg-cyan-600/20 border border-cyan-500/30 rounded-lg text-sm text-cyan-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Shine Effect on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: "linear-gradient(45deg, transparent 30%, rgba(6, 182, 212, 0.1) 50%, transparent 70%)",
                  }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
