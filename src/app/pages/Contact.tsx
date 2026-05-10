import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Torus, MeshDistortMaterial } from "@react-three/drei";

function AnimatedTorus() {
  return (
    <Torus args={[1, 0.4, 32, 100]} rotation={[Math.PI / 4, 0, 0]}>
      <MeshDistortMaterial
        color="#ec4899"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.1}
        metalness={0.8}
      />
    </Torus>
  );
}

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", link: "https://github.com", color: "hover:text-slate-300" },
    { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com", color: "hover:text-blue-400" },
    { icon: Twitter, label: "Twitter", link: "https://twitter.com", color: "hover:text-sky-400" },
    { icon: Instagram, label: "Instagram", link: "https://instagram.com", color: "hover:text-pink-400" },
  ];

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 1, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-500 to-purple-600 mb-6 relative"
              >
                <Mail className="w-10 h-10 text-white" />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-3xl bg-pink-500/50 blur-xl"
                />
              </motion.div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="text-slate-400 text-lg">
                Let's collaborate on something amazing
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-4 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 p-5 bg-gradient-to-r from-slate-900/80 to-slate-800/60 backdrop-blur-xl border border-pink-500/20 hover:border-pink-500/60 rounded-2xl transition-all group"
                  >
                    <div className="p-3 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-xl group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-pink-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-400 mb-1">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-4 text-white">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 bg-slate-900/80 border border-pink-500/20 hover:border-pink-500/60 rounded-2xl transition-all ${social.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form & 3D */}
          <div className="space-y-8">
            {/* 3D Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-[300px] rounded-3xl overflow-hidden relative"
            >
              <Canvas camera={{ position: [0, 0, 4] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <pointLight position={[-5, -5, -5]} intensity={0.5} color="#ec4899" />
                <AnimatedTorus />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
              </Canvas>
              <div className="absolute inset-0 bg-pink-600/10 blur-3xl -z-10" />
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-900/80 border border-pink-500/20 focus:border-pink-500/60 rounded-xl text-white outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-900/80 border border-pink-500/20 focus:border-pink-500/60 rounded-xl text-white outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/80 border border-pink-500/20 focus:border-pink-500/60 rounded-xl text-white outline-none transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(236, 72, 153, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 rounded-xl font-medium transition-all group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
