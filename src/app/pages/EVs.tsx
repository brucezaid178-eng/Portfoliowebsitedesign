import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Car, ExternalLink, Battery, Zap, Gauge } from "lucide-react";
import { useState } from "react";

const evProjects = [
  {
    id: 1,
    title: "Urban Commuter EV",
    description: "Compact electric vehicle designed for city commuting with smart features including regenerative braking, fast charging, and IoT connectivity. Perfect balance of efficiency and performance for urban environments.",
    photos: [
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800",
    ],
    specs: [
      { icon: Battery, label: "Battery", value: "50 kWh" },
      { icon: Gauge, label: "Range", value: "300 km" },
      { icon: Zap, label: "Charge Time", value: "45 min" },
    ],
    link: "https://example.com/urban-ev",
  },
  {
    id: 2,
    title: "High-Performance Sports EV",
    description: "Electric sports car combining cutting-edge aerodynamics with powerful electric motors. Features advanced battery management, track mode, and over-the-air updates for continuous performance improvements.",
    photos: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
      "https://images.unsplash.com/photo-1580414057011-c7d418e14c2b?w=800",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800",
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800",
    ],
    specs: [
      { icon: Battery, label: "Battery", value: "100 kWh" },
      { icon: Gauge, label: "0-100 km/h", value: "2.9 sec" },
      { icon: Zap, label: "Top Speed", value: "250 km/h" },
    ],
    link: "https://example.com/sports-ev",
  },
];

export function EVs() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, projectId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setActiveProject(null);
  };

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Animated Lightning Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <motion.linearGradient
              id="lightning-gradient"
              gradientUnits="userSpaceOnUse"
              animate={{ x1: ["0%", "100%"], x2: ["100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              <stop offset="0%" stopColor="#facc15" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#dc2626" />
            </motion.linearGradient>
          </defs>
          {[...Array(3)].map((_, i) => (
            <motion.path
              key={i}
              d={`M ${100 + i * 300} 0 L ${150 + i * 300} 200 L ${120 + i * 300} 200 L ${170 + i * 300} 400`}
              stroke="url(#lightning-gradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 0], opacity: [0, 0.5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: 90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1.2, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-500 to-orange-600 mb-6 relative"
          >
            <Car className="w-10 h-10 text-white" />
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 0, 0.5],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-3xl bg-yellow-500/50 blur-xl"
            />
          </motion.div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Electric Vehicles
          </h1>
          <p className="text-slate-400 text-lg">Sustainable mobility solutions</p>
        </motion.div>

        {/* EV Projects */}
        <div className="space-y-20">
          {evProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              style={{
                transformStyle: "preserve-3d",
                rotateX: activeProject === project.id ? rotateX : 0,
                rotateY: activeProject === project.id ? rotateY : 0,
              }}
              onMouseMove={(e) => {
                handleMouseMove(e, project.id);
                setActiveProject(project.id);
              }}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <div className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/60 backdrop-blur-xl rounded-3xl border border-yellow-500/20 hover:border-yellow-500/60 transition-all overflow-hidden">
                {/* Electric Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-600/0 via-yellow-600/20 to-yellow-600/0"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />

                <div className="relative p-8 lg:p-10">
                  {/* Title & Description */}
                  <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl lg:text-4xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-yellow-400 group-hover:to-orange-400 transition-all"
                  >
                    {project.title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-slate-300 text-lg leading-relaxed mb-8"
                  >
                    {project.description}
                  </motion.p>

                  {/* Specs Cards */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {project.specs.map((spec, specIndex) => {
                      const Icon = spec.icon;
                      return (
                        <motion.div
                          key={specIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 0.4 + specIndex * 0.1,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="relative p-5 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-2xl text-center group/spec overflow-hidden"
                        >
                          {/* Animated Background */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 opacity-0 group-hover/spec:opacity-100"
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          />

                          <div className="relative">
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Icon className="w-7 h-7 text-yellow-400 mx-auto mb-2" />
                            </motion.div>
                            <div className="text-sm text-slate-400 mb-1">{spec.label}</div>
                            <div className="text-xl font-bold text-white">{spec.value}</div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Photo Gallery */}
                  <div className={`grid gap-4 mb-8 ${
                    project.photos.length === 3 ? "grid-cols-3" : "grid-cols-2 lg:grid-cols-4"
                  }`}>
                    {project.photos.map((photo, photoIndex) => (
                      <motion.div
                        key={photoIndex}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + photoIndex * 0.1 }}
                        whileHover={{ scale: 1.15, zIndex: 10 }}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden group/photo cursor-pointer"
                      >
                        <img
                          src={photo}
                          alt={`${project.title} - ${photoIndex + 1}`}
                          className="w-full h-full object-cover transition-all duration-700 group-hover/photo:scale-110 group-hover/photo:brightness-110"
                        />

                        {/* Overlay with Lightning Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-orange-500/0 to-red-500/0 opacity-0 group-hover/photo:opacity-30"
                          animate={{
                            background: [
                              "linear-gradient(to bottom right, rgba(234, 179, 8, 0), rgba(249, 115, 22, 0), rgba(220, 38, 38, 0))",
                              "linear-gradient(to bottom right, rgba(234, 179, 8, 0.3), rgba(249, 115, 22, 0.3), rgba(220, 38, 38, 0.3))",
                              "linear-gradient(to bottom right, rgba(234, 179, 8, 0), rgba(249, 115, 22, 0), rgba(220, 38, 38, 0))",
                            ],
                          }}
                          transition={{ duration: 0.5 }}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Link */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(234, 179, 8, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 rounded-xl font-medium transition-all group/link"
                  >
                    <Zap className="w-5 h-5" />
                    <span>Explore Project</span>
                    <ExternalLink className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
