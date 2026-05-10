import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import { Sparkles, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router";

function AnimatedSphere() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 100]} scale={2.5}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

export function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0.8]), {
    stiffness: 100,
    damping: 30,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePosition({ x, y });
  };

  const features = [
    { title: "Achievements", description: "Milestones & Awards", path: "/achievements", gradient: "from-purple-600 to-pink-600" },
    { title: "Certifications", description: "Professional Credentials", path: "/certifications", gradient: "from-cyan-600 to-blue-600" },
    { title: "Web Projects", description: "Digital Creations", path: "/projects", gradient: "from-emerald-600 to-teal-600" },
    { title: "Drones", description: "Aerial Innovation", path: "/drones", gradient: "from-orange-600 to-red-600" },
    { title: "EVs", description: "Electric Mobility", path: "/evs", gradient: "from-yellow-600 to-orange-600" },
    { title: "Social Service", description: "Making Impact", path: "/social-service", gradient: "from-rose-600 to-pink-600" },
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.div style={{ y, opacity, scale }} className="relative min-h-screen flex items-center justify-center px-6 lg:pt-20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300">Welcome to my portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Creative
              </span>
              <br />
              <span className="text-white">Innovation</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                & Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-300 leading-relaxed max-w-xl"
            >
              Explore my journey through technology, innovation, and social impact.
              From web development to drones, EVs, and community service.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center gap-2 group"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <div className="flex gap-3">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 rounded-full bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-purple-300" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - 3D Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[500px] relative"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * 5}deg)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
              <AnimatedSphere />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            </Canvas>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-purple-600/20 blur-3xl -z-10" />
          </motion.div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="relative py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Explore My Work
            </h2>
            <p className="text-slate-400 text-lg">Discover different facets of my journey</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link to={feature.path}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="group relative p-8 rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/60 transition-all overflow-hidden"
                  >
                    {/* Gradient Overlay on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                    <div className="relative">
                      <div className={`inline-block p-3 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-4`}>
                        <div className="w-6 h-6 bg-white/20 rounded-lg" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 mb-4">{feature.description}</p>
                      <div className="flex items-center gap-2 text-purple-400 group-hover:gap-4 transition-all">
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative py-12 text-center text-slate-500 border-t border-purple-500/20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Designed & Built with passion
        </motion.p>
      </div>
    </div>
  );
}
