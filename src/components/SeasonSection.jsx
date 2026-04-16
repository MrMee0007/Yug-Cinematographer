import { useRef, useEffect, useCallback, useState, memo } from "react";
import {
  motion,
  useAnimationFrame,
} from "framer-motion";

/* ------------------ DATA ------------------ */

const videos = [
  { src: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1774475769/IMG_1405_lslxrm.mp4" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1774476897/IMG_1537_r5wi3p.mp4" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1774475783/IMG_1446_djat19.mp4" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1774477718/IMG_1242_m1rgo8.mp4" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1774477732/IMG_1159_emnsfs.mp4" },
];

const loopVideos = [...videos, ...videos];

const SeasonSection = () => {
  const beltRef = useRef(null);
  const y = useRef(0);
  const beltHeight = useRef(0);

  /* ------------------ DESKTOP LOOP ------------------ */

  useEffect(() => {
    if (beltRef.current) {
      beltHeight.current = beltRef.current.scrollHeight / 2;
    }
  }, []);

  useAnimationFrame((_, delta) => {
    const el = beltRef.current;
    if (!el) return;

    y.current -= delta * 0.05;

    if (y.current <= -beltHeight.current) {
      y.current += beltHeight.current;
    }

    el.style.transform = `translate3d(0, ${y.current}px, 0)`;
  });

  /* ------------------ MOBILE SLIDER ------------------ */

  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % videos.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + videos.length) % videos.length);
  }, []);

  /* ------------------ RENDER ------------------ */

  return (
    <section className="bg-white py-12 md:h-screen flex flex-col md:flex-row overflow-hidden">

      {/* 🧠 TEXT */}
      <div className="w-full md:w-[42%] flex flex-col justify-center items-center md:items-end text-center md:text-right px-6 md:pl-12 md:pr-2 py-8 md:py-0">
        <div className="max-w-md">
          <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-8xl font-extrabold text-blue-950 leading-tight">
            SEASON
          </h1>

          <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400">
            2025—26
          </h1>

          <p className="mt-4 text-sm sm:text-base text-blue-900 leading-relaxed">
            A visual journey through the seasons, capturing nature’s beauty.
          </p>
        </div>
      </div>

      {/* 🎬 STRIP */}
      <div className="w-full md:w-[58%] flex items-center justify-center relative">

        {/* 🖥 DESKTOP (UNCHANGED) */}
        <div className="hidden md:block relative rotate-[-18deg] scale-125">
          <div className="relative bg-white px-5 py-12 rounded-xl shadow-xl border border-black/10">

            <div className="absolute top-2 left-0 w-full flex justify-between px-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-black rounded-sm" />
              ))}
            </div>

            <div className="absolute bottom-2 left-0 w-full flex justify-between px-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-black rounded-sm" />
              ))}
            </div>

            <div ref={beltRef} className="flex flex-col gap-6 items-center">
              {loopVideos.map((video, i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }}>
                  <div className="bg-black p-[3px] rounded-sm shadow-md">
                    <video
                      src={video.src}
                      muted
                      loop
                      autoPlay
                      playsInline
                      className="w-[300px] md:w-[330px] h-[180px] md:h-[200px] object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 📱 MOBILE SLIDER */}
        <div className="md:hidden w-full flex flex-col items-center">

          <div className="relative w-[90%] aspect-[9/16] overflow-hidden rounded-2xl shadow-xl">
            <motion.div
              animate={{ x: `-${index * 100}%` }}
              transition={{ type: "spring", stiffness: 80 }}
              className="flex w-full h-full"
            >
              {videos.map((video, i) => (
                <video
                  key={i}
                  src={video.src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover flex-shrink-0"
                />
              ))}
            </motion.div>
          </div>

          {/* CONTROLS */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={prev}
              className="px-4 py-2 bg-black text-white rounded-full"
            >
              Prev
            </button>
            <button
              onClick={next}
              className="px-4 py-2 bg-black text-white rounded-full"
            >
              Next
            </button>
          </div>

          {/* DOTS */}
          <div className="flex gap-2 mt-4">
            {videos.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default memo(SeasonSection);