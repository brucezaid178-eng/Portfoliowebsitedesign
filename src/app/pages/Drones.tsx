import { motion, useScroll, useTransform } from "motion/react";
import { Plane, ExternalLink, Zap, Gauge, Radio } from "lucide-react";
import { useRef } from "react";

const droneProjects = [
  {
    id: 1,
    title: "Autonomous Delivery Drone",
    description: "Advanced autonomous drone system capable of delivering packages up to 5kg within a 10km radius. Features GPS navigation, obstacle avoidance, and real-time tracking. Equipped with computer vision for precise landing and package handling.",
    photos: [
      "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=800",
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800",
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800",
    ],
    specs: [
      { icon: Gauge, label: "Max Speed", value: "65 km/h" },
      { icon: Zap, label: "Flight Time", value: "45 min" },
      { icon: Radio, label: "Range", value: "10 km" },
    ],
    link: "https://example.com/delivery-drone",
  },
  {
    id: 2,
    title: "Agricultural Monitoring System",
    description: "Specialized drone for precision agriculture with multispectral imaging, crop health analysis, and automated field mapping. Helps farmers optimize irrigation, detect diseases early, and improve yield.",
    photos: [
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800",
      "https://images.unsplash.com/photo-1523459178261-028135da2714?w=800",
      "https://images.unsplash.com/photo-1566888596782-c7f41cc184c5?w=800",
      "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?w=800",
    ],
    specs: [
      { icon: Gauge, label: "Max Speed", value: "50 km/h" },
      { icon: Zap, label: "Flight Time", value: "60 min" },
      { icon: Radio, label: "Coverage", value: "100 acres/hr" },
    ],
    link: "https://example.com/agri-drone",
  },
];

export function Drones() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={containerRef} className="min-h-screen pt-24 lg:pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1.2, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 to-red-600 mb-6 relative"
          >
            <Plane className="w-10 h-10 text-white" />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 rounded-3xl bg-orange-500/50 blur-xl"
            />
          </motion.div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            Drone Projects
          </h1>
          <p className="text-slate-400 text-lg">Aerial innovation & autonomous systems</p>
        </motion.div>

        {/* Drone Projects */}
        <div className="space-y-20">
          {droneProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/60 backdrop-blur-xl rounded-3xl border border-orange-500/20 hover:border-orange-500/60 transition-all overflow-hidden">
                {/* Animated Border Glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.3), transparent)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "200% 0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative p-8 lg:p-10">
                  {/* Title & Description */}
                  <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl lg:text-4xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-orange-400 group-hover:to-red-400 transition-all"
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

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {project.specs.map((spec, specIndex) => {
                      const Icon = spec.icon;
                      return (
                        <motion.div
                          key={specIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + specIndex * 0.1 }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="relative p-4 bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-2xl text-center group/spec"
                        >
                          <Icon className="w-6 h-6 text-orange-400 mx-auto mb-2 group-hover/spec:scale-110 transition-transform" />
                          <div className="text-sm text-slate-400 mb-1">{spec.label}</div>
                          <div className="text-lg font-bold text-white">{spec.value}</div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Photos Grid */}
                  <div className={`grid gap-4 mb-8 ${
                    project.photos.length === 3 ? "grid-cols-3" : "grid-cols-2 lg:grid-cols-4"
                  }`}>
                    {project.photos.map((photo, photoIndex) => (
                      <motion.div
                        key={photoIndex}
                        initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + photoIndex * 0.1 }}
                        whileHover={{ scale: 1.1, zIndex: 10, rotateZ: 2 }}
                        className="relative aspect-square rounded-2xl overflow-hidden group/photo cursor-pointer"
                      >
                        <img
                          src={photo}
                          alt={`${project.title} - ${photoIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/photo:scale-125"
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity"
                          whileHover={{ opacity: 1 }}
                        >
                          <div className="absolute bottom-4 left-4 text-white text-sm">
                            View {photoIndex + 1}/{project.photos.length}
                          </div>
                        </motion.div>
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
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 rounded-xl transition-all group/link"
                  >
                    <span className="font-medium">View Project Details</span>
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
