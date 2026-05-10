import { motion } from "motion/react";
import { Code, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization platform with ML-based insights and predictive analytics. Built with React, Python, and TensorFlow.",
    category: "Web App",
    link: "https://example.com/project1",
    github: "https://github.com/example/project1",
    tags: ["React", "Python", "TensorFlow", "D3.js"],
    gradient: "from-purple-600 to-pink-600",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking.",
    category: "Full Stack",
    link: "https://example.com/project2",
    github: "https://github.com/example/project2",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    id: 3,
    title: "Social Media Analytics Tool",
    description: "Comprehensive social media analytics and engagement tracking platform with AI-powered content suggestions.",
    category: "SaaS",
    link: "https://example.com/project3",
    github: "https://github.com/example/project3",
    tags: ["Vue.js", "FastAPI", "Redis", "OpenAI"],
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    id: 4,
    title: "Smart Home IoT Dashboard",
    description: "Centralized control system for smart home devices with voice control and automation capabilities.",
    category: "IoT",
    link: "https://example.com/project4",
    github: "https://github.com/example/project4",
    tags: ["React Native", "MQTT", "AWS IoT", "Alexa"],
    gradient: "from-orange-600 to-red-600",
  },
  {
    id: 5,
    title: "Collaborative Code Editor",
    description: "Real-time collaborative coding platform with video chat, syntax highlighting, and code execution.",
    category: "DevTool",
    link: "https://example.com/project5",
    github: "https://github.com/example/project5",
    tags: ["React", "WebRTC", "Socket.io", "Monaco"],
    gradient: "from-yellow-600 to-orange-600",
  },
  {
    id: 6,
    title: "Blockchain Voting System",
    description: "Secure and transparent voting platform built on Ethereum blockchain with smart contracts.",
    category: "Blockchain",
    link: "https://example.com/project6",
    github: "https://github.com/example/project6",
    tags: ["Solidity", "Web3.js", "React", "IPFS"],
    gradient: "from-indigo-600 to-purple-600",
  },
];

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 mb-6 relative"
          >
            <Code className="w-10 h-10 text-white" />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-3xl bg-emerald-500/50 blur-xl"
            />
          </motion.div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Web Projects
          </h1>
          <p className="text-slate-400 text-lg">Digital creations & innovations</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                animate={{
                  rotateY: hoveredId === project.id ? 5 : 0,
                  z: hoveredId === project.id ? 50 : 0,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/60 backdrop-blur-xl rounded-3xl border border-emerald-500/20 hover:border-emerald-500/60 transition-all overflow-hidden h-full"
              >
                {/* Animated Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                <div className="relative p-6 space-y-4 h-full flex flex-col">
                  {/* Category Badge */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="inline-flex self-start"
                  >
                    <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-lg text-sm text-white font-medium`}>
                      {project.category}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-emerald-400 group-hover:to-teal-400 transition-all">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + tagIndex * 0.05 + 0.3 }}
                        className="px-2.5 py-1 bg-slate-800/80 border border-emerald-500/20 rounded-md text-xs text-emerald-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl transition-all group/link"
                    >
                      <span>Visit</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </motion.a>

                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 bg-slate-800/80 hover:bg-slate-700 border border-emerald-500/30 hover:border-emerald-500/60 rounded-xl transition-all"
                    >
                      <Github className="w-5 h-5 text-emerald-400" />
                    </motion.a>
                  </div>
                </div>

                {/* Floating Particles */}
                {hoveredId === project.id && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-emerald-400 rounded-full"
                        initial={{
                          x: Math.random() * 100 + "%",
                          y: "100%",
                          opacity: 0,
                        }}
                        animate={{
                          y: "-100%",
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "linear",
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
