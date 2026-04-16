import React, { useRef, useState, useCallback, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.45 },
};

const VideoCard = ({ project, isDimmed, onHover, onLeave }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  /* ------------------ LAZY LOAD ------------------ */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  /* ------------------ PLAY / PAUSE ------------------ */
  const handleClick = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  /* ------------------ PAUSE OTHERS ------------------ */
  useEffect(() => {
    if (isPlaying && videoRef.current) {
      document.querySelectorAll("video").forEach((vid) => {
        if (vid !== videoRef.current) vid.pause();
      });
    }
  }, [isPlaying]);

  /* ------------------ RENDER ------------------ */
  return (
    <motion.div
      ref={containerRef}
      {...fadeUp}
      viewport={{ once: true }}
      onMouseEnter={() => onHover?.(project.id)}
      onMouseLeave={() => onLeave?.()}
      className={`transition-opacity duration-300 ${
        isDimmed ? "opacity-40" : "opacity-100"
      }`}
    >
      {/* 🎬 VIDEO CONTAINER */}
      <div
        onClick={handleClick}
        className="
          relative w-full 
          aspect-[16/9] 
          min-h-[200px] sm:min-h-[240px] md:min-h-[260px]
          overflow-hidden 
          rounded-2xl 
          bg-gray-100 
          shadow-lg 
          cursor-pointer 
          transition-all duration-300
          hover:shadow-xl
        "
      >
        {/* VIDEO */}
        <video
          ref={videoRef}
          src={isVisible ? project.video : undefined}
          poster={project.thumbnail || `${project.video}?so_0`}
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover"
        />

        {/* 🎯 DARK OVERLAY (subtle) */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
        )}

        {/* ▶️ PLAY BUTTON */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="
                w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
                bg-white/90 
                backdrop-blur-md 
                border border-white/40
                rounded-full 
                flex items-center justify-center 
                shadow-xl
                transition-transform duration-300
                hover:scale-105
              "
            >
              <Play
                className="text-black w-5 h-5 sm:w-6 sm:h-6 ml-[2px]"
                fill="currentColor"
              />
            </div>
          </div>
        )}
      </div>

      {/* 🧠 TEXT */}
      <div className="mt-4 sm:mt-5 space-y-2">
        <h3 className="text-[15px] sm:text-base md:text-lg font-semibold leading-snug">
          {project.title}
        </h3>

        <p className="text-[11px] sm:text-xs text-gray-500">
          {project.category}
        </p>

        <div className="h-[2px] bg-black w-10 sm:w-14 mt-2" />
      </div>
    </motion.div>
  );
};

export default memo(VideoCard);