import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  "Netflix",
  "Sony Pictures",
  "Vogue",
  "Nike",
  "Apple",
  "Mercedes-Benz",
  "Dior",
  "Red Bull",
];

const experienceData = [
  {
    year: "Sept 2023 — Aug 2024",
    title: "Junior Editor",
    company: "Creative Team",
    description:
      "Started the journey by assisting in edits, learning pacing, storytelling, and building a strong foundation in visual narrative.",
  },
  {
    year: "Sept 2024 — Aug 2025",
    title: "Editing Head",
    company: "Creative Team",
    description:
      "Led the editing team, managed projects, defined visual style, and ensured high-quality output across all productions.",
  },
  {
    year: "Sept 2025 — Mar 2026",
    title: "General Secretary",
    company: "Creative Team",
    description:
      "Handled leadership responsibilities, coordinated teams, managed events, and drove creative direction at an organizational level.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={ref}
      className="relative bg-[#050505] py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-red-900/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT - EXPERIENCE */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-start gap-4 mb-12"
            >
              <span className="accent-dot-large mt-4 shadow-lg shadow-red-500/50" />
              <div>
                <h2 className="editorial-heading-large text-white">
                  EXPER
                </h2>
                <h2 className="editorial-heading-large text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 -mt-2 md:-mt-4">
                  IENCE
                </h2>
              </div>
            </motion.div>

            <div className="space-y-10 ml-9">
              {experienceData.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.1,
                  }}
                  className="relative pl-6 py-4 group"
                >
                  {/* 🔥 Vertical line */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10 group-hover:bg-gradient-to-b from-red-500 to-orange-400 transition-all duration-500" />

                  {/* Year */}
                  <span className="text-red-400 text-sm uppercase tracking-widest">
                    {item.year}
                  </span>

                  {/* Title + Latest Badge */}
                  <div className="flex items-center mt-2">
                    <h3 className="font-display text-xl md:text-2xl text-white uppercase group-hover:text-red-400 transition-colors duration-300">
                      {item.title}
                    </h3>

                    {index === experienceData.length - 1 && (
                      <span className="ml-3 text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">
                        Latest
                      </span>
                    )}
                  </div>

                  {/* Company */}
                  <p className="text-white/60 mt-1">
                    {item.company}
                  </p>

                  {/* Description */}
                  <p className="text-white/40 text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT - CLIENTS */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12"
            >
              <p className="text-red-400 uppercase tracking-[0.4em] text-sm mb-4">
                Trusted By
              </p>

              <h3 className="font-display text-3xl md:text-4xl text-white uppercase">
                Leading Brands & Studios
              </h3>
            </motion.div>

            {/* Clients Grid */}
            <div className="grid grid-cols-2 gap-4">
              {clients.map((client, index) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.05,
                  }}
                  className="relative py-6 px-4 text-center border border-white/10 
                             bg-white/5 backdrop-blur-md
                             hover:border-red-500 hover:bg-red-500/10
                             transition-all duration-300 group overflow-hidden"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                                  bg-gradient-to-br from-red-500/10 to-orange-400/10 
                                  blur-xl transition duration-500" />

                  <span className="relative font-display text-lg text-white/60 
                                   group-hover:text-white transition-colors uppercase tracking-wider">
                    {client}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 p-8 border-l-4 border-red-500 
                         bg-white/5 backdrop-blur-md relative overflow-hidden"
            >
              {/* subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-30" />

              <p className="relative text-white/80 italic text-lg leading-relaxed">
                "Growth is built frame by frame — from learning the cuts to leading the vision."
              </p>

              <cite className="relative mt-4 block text-red-400 text-sm uppercase tracking-widest not-italic">
                — Your Journey
              </cite>
            </motion.blockquote>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;