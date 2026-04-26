import { motion } from "framer-motion";
import { memo, useRef } from "react";

/* ------------------ DATA ------------------ */

const projects = [
  {
    title: "Recording Navjot — Short Clip",
    category: "Stage Frame",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1777123812/gennie_in_a_bottle_by8agg.mp4",
  },
  {
    title: "",
    category: "",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1777123725/AlrightTV_Promo_1_nfwpou.mp4",
  },
  {
    title: "",
    category: "",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1777124685/Cloth_Fast_cut_1_wqdmib.mp4",
  },
  {
    title: "",
    category: "",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1777123708/ANI_2_1_i5ehlc.mp4",
  },
];

/* ------------------ VIDEO CARD ------------------ */

const VideoCard = memo(({ project, large, reel }) => {
  const videoRef = useRef(null);

  const handleHover = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className={`relative overflow-hidden bg-black/40 backdrop-blur-md border border-white/10
        ${large ? "rounded-3xl" : "rounded-2xl"}
      `}
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        src={project.video}
        muted
        loop
        playsInline
        controls
        className={`w-full object-cover
          ${
            large
              ? "h-[65vh]"
              : reel
              ? "h-[520px] aspect-[9/16]"
              : "h-[420px]"
          }
        `}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

      {/* TEXT */}
      <div className="absolute bottom-0 left-0 w-full p-6 pointer-events-none">
        <p className="text-xs uppercase tracking-widest text-red-400 mb-2">
          {project.category}
        </p>

        <h3
          className={`font-display uppercase text-white
          ${large ? "text-3xl md:text-4xl" : "text-lg"}
        `}
        >
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
});

/* ------------------ MAIN ------------------ */

const ProjectsSection = () => {
  return (
    <section className="relative bg-[#050505] py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-red-900/10" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <p className="text-red-400 uppercase tracking-[0.4em] text-sm mb-4 ml-9">
            Selected Works
          </p>

          <div className="flex items-start gap-4 mb-8">
            <span className="accent-dot-large mt-6 shadow-red-500/50 shadow-lg" />

            <div>
              <h2 className="editorial-heading-large text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                VIS—
              </h2>
              <h2 className="editorial-heading-large text-white -mt-2 md:-mt-4">
                UALS
              </h2>
            </div>
          </div>

          <p className="text-white/60 max-w-xl ml-9 leading-relaxed">
            Every frame is intentional. Every cut carries rhythm.  
            These visuals are crafted to capture attention instantly 
            and leave a lasting emotional impact.
          </p>

          <div className="mt-10 ml-9 h-[1px] w-40 bg-gradient-to-r from-red-500 to-transparent" />
        </motion.div>

        {/* FEATURED */}
        <div className="mb-24">
          <VideoCard project={projects[0]} large />
        </div>

        {/* REELS */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {projects.slice(1).map((project, i) => (
            <motion.div
              key={project.video}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <VideoCard project={project} reel />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center border border-white/10 py-12 px-6 rounded-2xl bg-white/5 backdrop-blur-md"
        >
          <h3 className="text-white font-display text-2xl mb-4 uppercase">
            Let’s Create Something Powerful
          </h3>

          <p className="text-white/50 mb-6">
            High-impact visuals designed to stop scrolls and drive engagement.
          </p>

          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 
                       hover:from-red-700 hover:to-orange-600 
                       text-white uppercase tracking-widest text-sm transition"
          >
            Start a Project
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default memo(ProjectsSection);