// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { Film } from "lucide-react";
// import gsap from "gsap";

// const floatingCards = [
//   {
//     src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800",
//     rotation: -12,
//   },
//   {
//     src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800",
//     rotation: -6,
//   },
//   {
//     src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800",
//     rotation: -6,
//   },
//     {
//     src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800",
//     rotation: 0,
//   },
//   {
//     src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800",
//     rotation: 6,
//   },
//   {
//     src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800",
//     rotation: 6,
//   },
//   {
//     src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800",
//     rotation: 12,
//   },
// ];

// const HeroSection = () => {
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     const cards = cardsRef.current.filter(Boolean);
//     if (!cards.length) return;

//     const centerIndex = 3;
//     const centerCard = cards[centerIndex];
//     const otherCards = cards.filter((_, i) => i !== centerIndex);

//     gsap.set(cards, {
//       y: 200,
//       opacity: 0,
//       rotation: 0,
//       scale: 0.8,
//     });

//     gsap.set(otherCards, { zIndex: 5 });
//     gsap.set(centerCard, { zIndex: 20 });

//     const tl = gsap.timeline({ delay: 0.8 });

//     // Center card comes first
//     tl.to(centerCard, {
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       duration: 1.1,
//       ease: "power4.out",
//     });

//     tl.fromTo(
//       centerCard,
//       { filter: "blur(10px)" },
//       { filter: "blur(0px)", duration: 0.6 },
//       "-=0.6"
//     );

//     // After center completes → others spread
//     tl.to(otherCards, {
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       rotation: (i, el) => {
//         const originalIndex = cards.indexOf(el);
//         return floatingCards[originalIndex].rotation;
//       },
//       duration: 0.9,
//       stagger: 0.15,
//       ease: "back.out(1.8)",
//     });
//   }, []);

//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 bg-black">

//     {/* Background */}
//     <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
//     <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/5 blur-[140px] rounded-full" />

//     {/* Title */}
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="relative z-10 text-center mb-8 px-6"
//     >
//       <p className="text-xs md:text-sm font-mono tracking-[0.35em] text-zinc-500 uppercase mb-6">
//         Videographer & Photographer
//       </p>

//       <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-100 leading-[0.95] mb-4">
//         Hi, I'm <span className="text-zinc-300">YUG</span>
//       </h1>

//       <h2 className="text-4xl md:text-6xl lg:text-6xl font-semibold tracking-tight bg-gradient-to-r from-blue-800 via-blue-500 to-blue-700 bg-clip-text text-transparent">
//         Visual Storyteller
//       </h2>
//     </motion.div>

//       {/* Tag */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//         className="relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-200 border hover:bg-blue-300 border-slate-200 shadow-sm mb-14"
//       >
//         <Film className="w-4 h-4 text-blue-600" />
//         <span className="text-sm font-medium text-slate-700 tracking-wide">
//           <a href="">
//           yuggupta9236@gmail.com
//           </a>
//         </span>
//       </motion.div>

//      {/* Cards */}
// <div className="relative z-10 flex items-center justify-center -space-x-6 md:-space-x-8 px-6">
//   {floatingCards.map((card, i) => (
//     <div
//       key={i}
//       ref={(el) => (cardsRef.current[i] = el)}
//       className={`group relative rounded-xl flex-shrink-0
//       shadow-[0_10px_30px_rgba(15,23,42,0.15)]
//       ${
//         i === 2
//           ? "w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44"
//           : "w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
//       }`}
//     >
//       {/* Hover Layer (NO layout shift, NO GSAP conflict) */}
//       <div className="absolute inset-0 rounded-xl overflow-hidden transition-transform duration-300 ease-out group-hover:-translate-y-10 group-hover:z-30">
//         <img
//           src={card.src}
//           alt={`Portfolio ${i + 1}`}
//           className="w-full h-full object-cover"
//           loading="lazy"
//         />
//       </div>
//     </div>
//   ))}
// </div>

//       {/* Subtitle */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 1.8 }}
//         className="relative z-10 max-w-xl text-center text-slate-600 mt-10 px-6 text-sm md:text-base leading-relaxed"
//       >
//         I speak two languages:{" "}
//         <span className="font-medium text-slate-800">Light</span> and{" "}
//         <span className="font-medium text-slate-800">Emotion</span>.
//         Through intentional storytelling, I craft visuals that are refined, impactful, and timeless.
//       </motion.p>

//     </section>
//   );
// };

// export default HeroSection;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BennetHero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // 🎯 Parallax mouse tracking
  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: (e.clientX - window.innerWidth / 2) / 40,
        y: (e.clientY - window.innerHeight / 2) / 40,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#d3d3d3] relative overflow-hidden flex flex-col justify-between">

      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-6 z-10">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-6 h-6 bg-black rounded-full"></div>
          <span className="font-semibold text-lg">bennet</span>
        </div>

        <div className="flex gap-6 text-sm">
          <span className="bg-black text-white px-3 py-1 rounded hover:scale-105 transition">
            Index
          </span>
          <span className="hover:opacity-60 cursor-pointer">Projects</span>
          <span className="hover:opacity-60 cursor-pointer">Agency</span>
          <span className="hover:opacity-60 cursor-pointer">Resources</span>
        </div>

        <button className="border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300">
          Let's Talk
        </button>
      </div>

      {/* 🎬 FLOATING IMAGES */}
      <div className="absolute inset-0 pointer-events-none">

        {/* LEFT BIG (Foreground) */}
        <motion.img
          src="https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774562715/img6_kcusio.webp"
          className="absolute bottom-10 left-10 w-56 rotate-[-12deg] rounded-xl shadow-2xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{
            transform: `translate(${mouse.x * 2}px, ${mouse.y * 2}px)`
          }}
          whileHover={{
            scale: 1.12,
            rotate: 0,
            rotateX: 5,
            rotateY: -5,
          }}
        />

        {/* LEFT SMALL (Background) */}
        <motion.img
          src="https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774562715/img6_kcusio.webp"
          className="absolute top-24 left-24 w-24 opacity-70 blur-[1px] rounded-md shadow-lg"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{
            transform: `translate(${mouse.x * 0.5}px, ${mouse.y * 0.5}px)`
          }}
        />

        {/* RIGHT MID */}
        <motion.img
          src="https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774562715/img6_kcusio.webp"
          className="absolute top-20 right-20 w-40 rotate-[10deg] rounded-xl shadow-xl"
          animate={{
            y: [0, 25, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 7, repeat: Infinity }}
          style={{
            transform: `translate(${mouse.x * 1.5}px, ${mouse.y * 1.5}px)`
          }}
          whileHover={{
            scale: 1.1,
            rotate: 0,
            rotateX: -5,
            rotateY: 5,
          }}
        />

        {/* RIGHT SMALL (Background) */}
        <motion.img
          src="https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774562715/img6_kcusio.webp"
          className="absolute bottom-24 right-32 w-24 opacity-60 blur-[1px] rounded-md shadow-lg"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{
            transform: `translate(${mouse.x * 0.6}px, ${mouse.y * 0.6}px)`
          }}
        />

      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center flex-1 relative z-10">

        <span className="absolute left-32 text-gray-600 text-sm">
          Welcome
        </span>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[80px] md:text-[160px] font-extrabold tracking-tight leading-none"
        >
          bennet
        </motion.h1>

        <span className="absolute right-32 text-gray-600 text-sm">
          Est. 2025
        </span>

        {/* 👀 Eye Loader */}
        <div className="absolute bottom-10 flex flex-col items-center">
          <span className="text-xs mb-2">[ Loading ]</span>

          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center relative overflow-hidden shadow-lg">

            <motion.div
              className="w-3 h-3 bg-black rounded-full absolute"
              animate={{ x: mouse.x, y: mouse.y }}
              style={{ left: "35%", top: "40%" }}
            />

            <motion.div
              className="w-3 h-3 bg-black rounded-full absolute"
              animate={{ x: mouse.x, y: mouse.y }}
              style={{ right: "35%", top: "40%" }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center pb-10 z-10"
      >
        <p className="text-xl md:text-2xl font-medium">
          Bringing brands to life through <br />
          creative web solutions
        </p>
      </motion.div>

      {/* Footer indicators */}
      <div className="absolute bottom-6 left-10 text-sm flex gap-2">
        ↓ <span>Scroll to Explore</span>
      </div>

      <div className="absolute bottom-6 right-10 text-sm">
        Featured Projects
      </div>
    </div>
  );
}