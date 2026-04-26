import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-black text-white py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* 🎬 Cinematic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-red-900/10 pointer-events-none" />

      {/* ✨ LEFT vertical text */}
      <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 text-vertical">
        <span className="text-white/70 text-xs tracking-[0.6em] uppercase">
          About • Story • Workflow
        </span>
      </div>

      {/* ✨ RIGHT vertical text (UPDATED) */}
      <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 text-vertical">
        <span className="text-red-500/70 text-xs tracking-[0.6em] uppercase">
          Editing • Post Production • Visual Storytelling
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* 🔹 Title */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <span className="accent-dot-large shadow-[0_0_15px_rgba(255,0,0,0.6)] mt-4" />
              <div>
                <h2 className="editorial-heading-large text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                  ABOUT
                </h2>
                <h2 className="editorial-heading-large -mt-2 md:-mt-4 text-white/90">
                  ME
                </h2>
              </div>
            </motion.div>
          </div>

          {/* 🔹 Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 relative group"
          >
            <div className="aspect-[3/4] relative">

              {/* Outer frame */}
              <div className="absolute -top-5 -right-5 w-full h-full border border-red-500/40 
                              group-hover:border-red-500/80 transition-all duration-500 z-0" />

              {/* Inner wrapper */}
              <div className="relative w-full h-full border border-white/10 
                              group-hover:border-red-400/60 transition-all duration-500 z-10 overflow-hidden">

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-400/20 
                                opacity-0 group-hover:opacity-100 blur-xl transition duration-700" />

                {/* Image */}
                <img
                  src="https://res.cloudinary.com/ds0y1ut9q/image/upload/v1776956917/WhatsApp_Image_2026-04-23_at_8.31.53_PM_mnedc5.webp"
                  alt="Video Editor Portrait"
                  className="w-full h-full object-cover grayscale 
                             group-hover:grayscale-0 group-hover:scale-105 
                             transition-all duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Vertical text */}
                <div className="absolute left-2 top-1/2 -translate-y-1/2 text-vertical opacity-0 group-hover:opacity-100 transition duration-500">
                  <span className="text-black text-xl tracking-[0.5em] uppercase">
                    Editor
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 🔹 Content (UPDATED) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-4"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-red-400 mb-4">
              The Craft
            </p>

            <p className="text-lg leading-relaxed text-white/70 mb-6">
              I am a visual editor specializing in transforming raw footage into
              compelling, emotionally engaging stories. My work spans commercials,
              music videos, short films, and digital content — where rhythm,
              pacing, and precision define impact.
            </p>

            <p className="text-lg leading-relaxed text-white/60 mb-8">
              Editing is where stories truly come alive. I focus on seamless
              transitions, dynamic pacing, and narrative flow to create visuals
              that not only look stunning but feel unforgettable. Every cut is
              intentional. Every frame matters.
            </p>

            {/* 🔹 Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {[
                { value: "4+", label: "Years" },
                { value: "236+", label: "Cuts" },
                { value: "15+", label: "Clients" },
              ].map((item, i) => (
                <div key={i} className="group">
                  <span
                    className="editorial-heading text-4xl text-transparent bg-clip-text 
                               bg-gradient-to-r from-red-400 to-orange-400
                               group-hover:scale-110 transition-transform duration-300 inline-block"
                  >
                    {item.value}
                  </span>
                  <p className="text-xs uppercase tracking-wider mt-1 text-white/40 group-hover:text-red-400 transition-colors">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;