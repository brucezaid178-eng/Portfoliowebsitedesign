import { motion } from "motion/react";
import { Award, ExternalLink, Calendar, MapPin } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Best Innovation Award 2025",
    date: "March 2025",
    location: "Tech Summit, San Francisco",
    description: "Recognized for developing an AI-powered solution that improved efficiency by 300%",
    photos: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
    ],
    links: [
      { label: "News Article", url: "#" },
      { label: "Certificate", url: "#" },
    ],
  },
  {
    id: 2,
    title: "Hackathon Winner",
    date: "January 2025",
    location: "MIT, Boston",
    description: "First place in 48-hour hackathon with 500+ participants",
    photos: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
    ],
    links: [
      { label: "Project Demo", url: "#" },
      { label: "GitHub Repo", url: "#" },
    ],
  },
  {
    id: 3,
    title: "Research Publication",
    date: "November 2024",
    location: "International Conference",
    description: "Published research on autonomous systems in peer-reviewed journal",
    photos: [
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800",
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800",
    ],
    links: [
      { label: "Read Paper", url: "#" },
      { label: "Conference Page", url: "#" },
    ],
  },
];

export function Achievements() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-500 to-orange-600 mb-6 relative"
          >
            <Award className="w-10 h-10 text-white" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-3xl bg-yellow-500/50 blur-xl"
            />
          </motion.div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Achievements
          </h1>
          <p className="text-slate-400 text-lg">Milestones that mark my journey</p>
        </motion.div>

        {/* Achievements Timeline */}
        <div className="space-y-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <div className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl rounded-3xl border border-orange-500/20 hover:border-orange-500/60 transition-all overflow-hidden">
                {/* Glowing Border Animation */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.3), transparent)",
                  }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-yellow-400 group-hover:to-orange-400 transition-all">
                        {achievement.title}
                      </h2>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-orange-400" />
                          <span>{achievement.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-orange-400" />
                          <span>{achievement.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Photos Grid */}
                  <div className={`grid gap-4 mb-6 ${
                    achievement.photos.length === 2 ? "grid-cols-2" :
                    achievement.photos.length === 3 ? "grid-cols-3" :
                    "grid-cols-2 lg:grid-cols-4"
                  }`}>
                    {achievement.photos.map((photo, photoIndex) => (
                      <motion.div
                        key={photoIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: photoIndex * 0.1 }}
                        whileHover={{ scale: 1.05, zIndex: 10 }}
                        className="relative aspect-video rounded-2xl overflow-hidden group/photo"
                      >
                        <img
                          src={photo}
                          alt={`${achievement.title} - ${photoIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/photo:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {achievement.links.map((link, linkIndex) => (
                      <motion.a
                        key={linkIndex}
                        href={link.url}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-600/20 to-yellow-600/20 hover:from-orange-600/40 hover:to-yellow-600/40 border border-orange-500/30 hover:border-orange-500/60 rounded-xl transition-all group/link"
                      >
                        <span className="text-orange-300">{link.label}</span>
                        <ExternalLink className="w-4 h-4 text-orange-400 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connecting Line for Timeline Effect */}
              {index < achievements.length - 1 && (
                <div className="absolute left-1/2 -bottom-12 w-px h-12 bg-gradient-to-b from-orange-500/50 to-transparent transform -translate-x-1/2 hidden lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
