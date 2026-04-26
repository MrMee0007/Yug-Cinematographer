import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Neon Nights",
    category: "Cinematography",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    title: "Dawn of Light",
    category: "Documentary",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 3,
    title: "Crimson Dreams",
    category: "Fashion",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 4,
    title: "Timeless",
    category: "Commercial",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative section-dark py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 overflow-hidden"
    >

      {/* 🔥 BACKGROUND VIDEO */}
      <div className="absolute inset-0 -z-10">
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-start gap-4"
          >
            <span className="text-vertical font-display text-6xl lg:text-8xl text-secondary-foreground/20 hidden md:block">
              01
            </span>
            <div>
              <h2 className="editorial-heading-large text-primary">PORT</h2>
              <h2 className="editorial-heading-large text-secondary-foreground -mt-2 md:-mt-4">
                FOLIO
              </h2>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-secondary-foreground/60 max-w-md text-right"
          >
            A curated selection of cinematic works spanning film, commercial,
            and editorial projects.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

          {/* LARGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 lg:row-span-2 portfolio-card group"
          >
            <video
              src={projects[0].video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="portfolio-card-title">
              <span className="text-primary text-sm uppercase tracking-widest block mb-2">
                {projects[0].category}
              </span>
              <span className="text-3xl">{projects[0].title}</span>
            </div>
          </motion.div>

          {/* SMALL CARDS */}
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="portfolio-card group aspect-[4/3]"
            >
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="portfolio-card-title">
                <span className="text-primary text-sm uppercase tracking-widest block mb-2">
                  {project.category}
                </span>
                <span className="text-xl">{project.title}</span>
              </div>
            </motion.div>
          ))}

        </div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="btn-editorial">
            <span>View All Works</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default PortfolioSection;