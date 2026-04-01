import React, { useRef, useState, useCallback, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const VideoCard = ({ project, isDimmed }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // 👀 Lazy load when visible
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

  // ▶️ Play/Pause
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

  // 🧠 Pause other videos
  useEffect(() => {
    if (isPlaying && videoRef.current) {
      document.querySelectorAll("video").forEach((vid) => {
        if (vid !== videoRef.current) vid.pause();
      });
    }
  }, [isPlaying]);

  return (
    <motion.div
      ref={containerRef}
      {...fadeUp}
      viewport={{ once: true }}
      className={`cursor-pointer transition-opacity duration-300 ${
        isDimmed ? "opacity-40" : "opacity-100"
      }`}
    >
      <div
        onClick={handleClick}
        onMouseEnter={() => videoRef.current?.play()}
        onMouseLeave={() => {
          videoRef.current?.pause();
          setIsPlaying(false);
        }}
        className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gray-100 shadow-md group"
      >
        <video
          ref={videoRef}
          src={isVisible ? project.video : undefined}
          poster={project.thumbnail}
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover"
        />

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white border rounded-full flex items-center justify-center shadow-md">
              <Play className="text-black w-6 h-6 ml-1" fill="currentColor" />
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-xs text-gray-500 mt-1">
            {project.category}
          </p>
        </div>
        <div className="h-[2px] bg-black w-10 mt-3" />
      </div>
    </motion.div>
  );
};

export default memo(VideoCard);