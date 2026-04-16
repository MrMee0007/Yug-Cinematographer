import { useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import VideoCard from "./VideoCard2";

/* ------------------ DATA ------------------ */

const PROJECTS = [
  {
    id: 1,
    title: "DJ - Night Promo",
    category: "Post Promotional Edit",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1774726581/Herovideo_1_fylein.mp4",
  },
  {
    id: 2,
    title: "Cultural Festival Promo",
    category: "Cinematic Highlight Edit",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1774473477/AQPqDsiLyTttJE6Y3FRez94xxeH9k3kSSaheArJ0mq-tS6D_lKzsT0XEh2sTDX2AshiiXvBUmtgkCxKF3PwmkqMlt69zmgQRNondo8c_vtl44p.mp4",
  },
  {
    id: 3,
    title: "Freshers Party Promo",
    category: "Event Highlight Edit",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1774383805/AQMxd98OcoIgfakTTcpaWtDXxVBpZqB1CL6JqQziQfDyWQyGU4zzr5qLSXUHu9t2GNO6D0MvLTSNgzvZYJLm2TPZ_arygCODJBiswdA_-_ROTATE_-_Videobolt.net_ahe5em.mp4",
  },
  {
    id: 4,
    title: "University Convocation Ceremony",
    category: "Impactful Event Edit",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1774383822/AQMvzmeg8SevVfTvc-NhWDB_KaUv4fmDgYKcsOtxEXCAP5NlcrU_DSBCpShRafbCq-lssGJRdZAYofYOeIfdqewf9qBsEWYsGdc-ens_-_ROTATE_-_Videobolt.net_fyeq8e.mp4",
  },
];

/* ------------------ ANIMATIONS ------------------ */

const fadeUp = {
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const slideLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const slideRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const MemoVideoCard = memo(VideoCard);

/* ------------------ COMPONENT ------------------ */

const RecentWork = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const handleHover = useCallback((id) => setHoveredId(id), []);
  const handleLeave = useCallback(() => setHoveredId(null), []);

  const featured = PROJECTS[0];
  const others = PROJECTS.slice(1, 3);
  const last = PROJECTS[3];

  return (
    <section className="bg-white text-black py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-[1200px] mx-auto">

        {/* 🔥 HERO */}
        <div className="mb-16 md:mb-20">
          <span className="text-xs tracking-[0.25em] text-gray-400 block mb-4 uppercase">
            Selected Work
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            I EDIT <br />
            WITH <span className="text-gray-400">INTENTION</span>
          </h1>
        </div>

        {/* 🎬 FEATURED */}
        <div className="mb-16 md:mb-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          <MemoVideoCard project={featured} />

          <motion.div
            {...slideRight}
            className="w-full max-w-[92%] sm:max-w-md md:max-w-lg mx-auto md:mx-0 text-center md:text-left"
          >
            <h2 className="text-[18px] sm:text-[22px] md:text-[34px] lg:text-[44px] font-extrabold leading-[1.15] tracking-tight break-words">
              {featured.title}
            </h2>

            <p className="mt-4 text-[14px] sm:text-[15px] md:text-[16px] text-gray-600 leading-[1.6]">
              Crafted with{" "}
              <span className="font-semibold text-black">precision</span> and{" "}
              <span className="font-semibold text-black">cinematic flow</span>.
              Designed to capture attention instantly.
            </p>
          </motion.div>
        </div>

        {/* 🎥 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 mb-20 md:mb-24">
          {others.map((project) => {
            const isDimmed = hoveredId !== null && hoveredId !== project.id;

            return (
              <motion.div key={project.id} {...fadeUp}>
                <MemoVideoCard
                  project={project}
                  isDimmed={isDimmed}
                  onHover={handleHover}
                  onLeave={handleLeave}
                />
              </motion.div>
            );
          })}
        </div>

        {/* 💎 FINAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          <motion.div {...slideLeft} className="max-w-lg">
            <span className="text-xs tracking-[0.25em] text-gray-400 block mb-4 uppercase">
              Final Showcase
            </span>

            <h2 className="text-2xl md:text-5xl font-extrabold leading-tight">
              Built for <br />
              <span className="text-gray-400">Impact & Memory</span>
            </h2>

            <p className="mt-4 md:mt-6 text-sm md:text-lg text-gray-600 leading-relaxed">
              This piece represents the balance between{" "}
              <span className="text-black font-semibold">visual intensity</span>{" "}
              and{" "}
              <span className="text-black font-semibold">
                storytelling clarity
              </span>.
            </p>
          </motion.div>

          <motion.div {...slideRight}>
            <MemoVideoCard project={last} />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default memo(RecentWork);