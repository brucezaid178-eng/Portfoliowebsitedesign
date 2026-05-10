import { motion, useScroll, useTransform } from "motion/react";
import { Heart, Users, TreePine, GraduationCap, Utensils, HandHeart } from "lucide-react";
import { useRef } from "react";

const activities = [
  {
    id: 1,
    title: "Community Education Initiative",
    description: "Providing free education and skill development programs to underprivileged children in rural areas.",
    icon: GraduationCap,
    photos: [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800",
    ],
    workflow: [
      "Identify communities in need",
      "Recruit and train volunteer educators",
      "Develop curriculum and learning materials",
      "Conduct regular classes and workshops",
      "Track progress and impact",
    ],
    impact: "500+ children educated",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Food Distribution Program",
    description: "Weekly food distribution drives for homeless and economically disadvantaged families.",
    icon: Utensils,
    photos: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800",
      "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=800",
    ],
    workflow: [
      "Partner with local restaurants and donors",
      "Organize food collection drives",
      "Coordinate volunteer teams",
      "Distribute meals in identified areas",
      "Monitor and expand reach",
    ],
    impact: "10,000+ meals served",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 3,
    title: "Environmental Conservation",
    description: "Tree plantation drives and awareness campaigns for environmental sustainability.",
    icon: TreePine,
    photos: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800",
      "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=800",
    ],
    workflow: [
      "Survey areas for plantation",
      "Source native plant species",
      "Mobilize volunteer groups",
      "Plant and maintain trees",
      "Conduct awareness workshops",
    ],
    impact: "5,000+ trees planted",
    color: "from-emerald-500 to-green-500",
  },
  {
    id: 4,
    title: "Healthcare Outreach",
    description: "Free medical camps and health awareness programs in underserved communities.",
    icon: HandHeart,
    photos: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800",
    ],
    workflow: [
      "Identify healthcare gaps",
      "Coordinate with medical professionals",
      "Set up mobile medical camps",
      "Provide free consultations and medicines",
      "Follow-up care and documentation",
    ],
    impact: "2,000+ patients treated",
    color: "from-rose-500 to-pink-500",
  },
];

export function SocialService() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={containerRef} className="min-h-screen pt-24 lg:pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-20 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-rose-500 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-pink-500 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto max-w-7xl relative z-10">
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
            transition={{ type: "spring", duration: 1, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-rose-500 to-pink-600 mb-6 relative"
          >
            <Heart className="w-10 h-10 text-white fill-white" />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-3xl bg-rose-500/60 blur-xl"
            />
          </motion.div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Social Service
          </h1>
          <p className="text-slate-400 text-lg">Making a difference in the community</p>
        </motion.div>

        {/* Activities */}
        <div className="space-y-16">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                <div className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/60 backdrop-blur-xl border border-rose-500/20 hover:border-rose-500/60 rounded-3xl overflow-hidden transition-all">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <div className="relative p-8 lg:p-10">
                    {/* Header */}
                    <div className="flex items-start gap-6 mb-8">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className={`p-5 bg-gradient-to-br ${activity.color} rounded-2xl`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <motion.h2
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-3xl lg:text-4xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-rose-400 group-hover:to-pink-400 transition-all"
                        >
                          {activity.title}
                        </motion.h2>
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="text-slate-300 text-lg leading-relaxed"
                        >
                          {activity.description}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 }}
                          className={`inline-flex items-center gap-2 px-4 py-2 mt-4 bg-gradient-to-r ${activity.color} rounded-xl`}
                        >
                          <Users className="w-4 h-4" />
                          <span className="font-medium">{activity.impact}</span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Photos Grid */}
                    <div className={`grid gap-4 mb-8 ${
                      activity.photos.length === 2 ? "grid-cols-2" :
                      activity.photos.length === 3 ? "grid-cols-3" :
                      "grid-cols-2 lg:grid-cols-4"
                    }`}>
                      {activity.photos.map((photo, photoIndex) => (
                        <motion.div
                          key={photoIndex}
                          initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + photoIndex * 0.1 }}
                          whileHover={{ scale: 1.05, zIndex: 10 }}
                          className="relative aspect-[4/3] rounded-2xl overflow-hidden group/photo"
                        >
                          <img
                            src={photo}
                            alt={`${activity.title} - ${photoIndex + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/photo:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Workflow */}
                    <div>
                      <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-xl font-bold mb-4 text-white flex items-center gap-2"
                      >
                        <div className={`w-1 h-6 bg-gradient-to-b ${activity.color} rounded-full`} />
                        Workflow
                      </motion.h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {activity.workflow.map((step, stepIndex) => (
                          <motion.div
                            key={stepIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 + stepIndex * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative p-4 bg-slate-900/60 border border-rose-500/20 rounded-xl group/step"
                          >
                            <motion.div
                              className={`absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br ${activity.color} rounded-full flex items-center justify-center font-bold text-sm group-hover/step:scale-110 transition-transform`}
                            >
                              {stepIndex + 1}
                            </motion.div>
                            <p className="text-slate-300 text-sm leading-relaxed pl-4">
                              {step}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative inline-block p-8 lg:p-12 bg-gradient-to-br from-slate-900/90 to-slate-800/60 backdrop-blur-xl border border-rose-500/30 rounded-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
              Join the Movement
            </h2>
            <p className="text-slate-300 text-lg mb-6 max-w-2xl">
              Together we can create lasting change. Get involved and make a difference in your community.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(244, 63, 94, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 rounded-xl font-medium transition-all"
            >
              Become a Volunteer
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
