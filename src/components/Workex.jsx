import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

/* =========================
   DATA
========================= */
const projects = [
  {
    id: 1,
    title: "Grata Burger",
    category: "Commercial",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1777120021/grata_burger_1_hu5gfp.mp4",
    tagline: "Sizzle meets story.",
  },
  {
    id: 2,
    title: "HitA — Short Clip",
    category: "Advertisement",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1777120050/HITAAAA_yqgkf5.mp4",
    tagline: "Bold cuts. Instant impact.",
  },
  {
    id: 3,
    title: "Crimson Dreams",
    category: "Commercial",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1777120021/grata_Sandwchh_vim2ol.mp4",
    tagline: "Elegance in motion.",
  },
  {
    id: 4,
    title: "Urban Pulse",
    category: "Music Video",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1777123812/gennie_in_a_bottle_by8agg.mp4",
    tagline: "Feel the rhythm.",
  },
  {
    id: 5,
    title: "AI Edits ",
    category: "Advertisement",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1777120048/Sequence_01_spe5ks.mp4",
    tagline: "AI-enhanced.",
  },
  {
    id: 6,
    title: "AlrightTV Promo",
    category: "Commercial",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1777123725/AlrightTV_Promo_1_nfwpou.mp4",
    tagline: "Fast cuts. Bold Emotion.",
  },
  {
    id: 7,
    title: "Design Stories — Short Clip",
    category: "Stories",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1777124685/Cloth_Fast_cut_1_wqdmib.mp4",
    tagline: "Texture meets motion.",
  },
  {
    id: 8,
    title: "AI Edits ",
    category: "Editorial",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1777123708/ANI_2_1_i5ehlc.mp4",
    tagline: "AI-enhanced storytelling.",
  },
];

const categories = [
  "All",
  "Commercial",
  "Advertisement",
  "Editorial",
  "Music Video",
  "Stories",
];

/* =========================
   VIDEO CARD
========================= */
const VideoCard = ({
  project,
  index,
  hoveredProject,
  setHoveredProject,
  setActiveVideo,
}) => {
  const videoRef = useRef(null);
  const isHovered = hoveredProject === project.id;

  // 🎬 Dynamic layout
  const isLarge = index % 3 === 0;
  const isReel = index % 3 === 1;

  return (
    <motion.div
      className={`relative overflow-hidden cursor-pointer ${
        isLarge ? "md:col-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      onMouseEnter={() => {
        setHoveredProject(project.id);
        videoRef.current?.play();
      }}
      onMouseLeave={() => {
        setHoveredProject(null);
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
      onClick={() => setActiveVideo(project.video)}
    >
      <video
        ref={videoRef}
        src={project.video}
        muted
        loop
        playsInline
        controls={isHovered}
        className={`w-full object-cover border border-white/40 ${
          isLarge
            ? "h-[520px]"
            : isReel
            ? "h-[520px] aspect-[9/16]"
            : "h-[520px]"
        }`}
      />

      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* <div className="absolute bottom-0 p-6 pointer-events-none">
        <span className="text-red-400 text-xs tracking-[0.3em] uppercase">
          {project.category}
        </span>

        <h3 className="font-display text-2xl text-white uppercase mt-2">
          {project.title}
        </h3>

        <p className="text-white/60 text-sm mt-2">
          {project.tagline}
        </p>
      </div> */}
    </motion.div>
  );
};

/* =========================
   MAIN PAGE
========================= */
const WorksPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-black text-white">

      {/* 🔥 WRAPPER FIX */}
      <div className="pt-[80px]">

        {/* HERO */}
        <section className="min-h-[60vh] flex items-center px-6 md:px-12 lg:px-20 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
    <p className="text-red-400 uppercase tracking-[0.4em] text-sm mb-4">
      Selected Works
    </p>

    <div className="flex items-start gap-4 mb-8">
      <span className="accent-dot-large mt-6 shadow-red-500/50 shadow-lg" />

      <div>
        <h2 className="editorial-heading-large text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 leading-none">
          VIS—
        </h2>
        <h2 className="editorial-heading-large text-white -mt-2 md:-mt-4 leading-none">
          UALS
        </h2>
      </div>
    </div>

    <p className="text-white/60 max-w-xl leading-relaxed">
      Every frame is intentional. Every cut carries rhythm.  
      These visuals are crafted to capture attention instantly 
      and leave a lasting emotional impact.
    </p>

    <div className="mt-10 h-[1px] w-40 bg-gradient-to-r from-red-500 to-transparent" />
  </motion.div>

</section>

        {/* FILTER */}
        <div className="sticky top-[80px] bg-black/80 backdrop-blur px-6 md:px-12 lg:px-20 py-4 flex gap-6 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`uppercase text-xs ${
                activeCategory === cat
                  ? "text-red-400"
                  : "text-white/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <section className="px-6 md:px-12 lg:px-20 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <VideoCard
              key={project.id}
              project={project}
              index={index}
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
              setActiveVideo={setActiveVideo}
            />
          ))}
        </section>

      </div>

      {/* FULLSCREEN */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-6"
            onClick={() => setActiveVideo(null)}
          >
            <motion.video
              src={activeVideo}
              controls
              autoPlay
              className="w-full max-w-5xl rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

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

    </main>
  );
};

export default WorksPage;