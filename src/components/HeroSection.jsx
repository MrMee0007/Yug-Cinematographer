import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">

      {/* 🎬 Background Video */}
{/* 🎬 Background Video */}
<motion.div
  initial={{ scale: 1.1 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
  className="absolute inset-0"
>
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  >
    <source
      src="https://res.cloudinary.com/ds0y1ut9q/video/upload/v1777139820/lv_0_20260425195346_himtv1.mp4"
      type="video/mp4"
    />
  </video>

  {/* 🌫️ LIGHT CINEMATIC OVERLAY (NEW) */}
  <div className="absolute inset-0 bg-white/5 backdrop-brightness-[0.8]" />

  {/* 🎨 Gradient depth (balanced) */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

  {/* 🔥 Warm cinematic tint */}
  <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 via-orange-500/10 to-transparent mix-blend-overlay" />
</motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-12 lg:px-20 py-8">

<nav className="fixed top-0 left-0 right-0 z-50 h-[80px] px-6 md:px-12 lg:px-20 flex justify-between items-center 
bg-black/30 backdrop-blur-xl border-b border-white/10">

  {/* LEFT: LOGO */}
  <div className="flex items-center gap-3">
    <span className="accent-dot-large shadow-[0_0_20px_rgba(255,0,0,0.6)]" />

    <span className="font-display text-white text-lg tracking-widest uppercase">
      Jay Sharma
    </span>
  </div>

  {/* CENTER: NAV LINKS */}
  <div className="hidden md:flex items-center gap-10 text-xs tracking-[0.2em] uppercase">
    
    <Link
      to="/"
      className="relative text-white/60 hover:text-white transition group"
    >
      Home
      <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
    </Link>

    <Link
      to="/works"
      className="relative text-white group"
    >
      Works
      <span className="absolute left-0 -bottom-2 h-[1px] w-full bg-red-500" />
    </Link>

    <a
      href="/services"
      className="relative text-white/60 hover:text-white transition group"
    >
      Services
      <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
    </a>

    <a
      href="/contact"
      className="relative text-white/60 hover:text-white transition group"
    >
      Contact
      <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
    </a>

  </div>

  {/* RIGHT: CTA */}
  <div className="hidden md:block">
    <a
      href="/contact"
      className="px-5 py-2 text-xs uppercase tracking-widest border border-white/20 text-white/80 
      hover:border-red-500 hover:text-white transition backdrop-blur"
    >
      Let’s Talk
    </a>
  </div>

</nav>

        {/* 🔹 MAIN */}
        <div className="flex-1 flex items-center">
          <div className="max-w-4xl">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-orange-400 uppercase tracking-[0.5em] text-sm mb-4"
            >
              Creative Cinematographer
            </motion.p>

            {/* VISUAL */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="editorial-heading-giant text-white "
              >
                VISUAL
              </motion.h1>
            </div>

            {/* STORYTELLER */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="editorial-heading-giant"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                  STORY
                </span>
                <span className="text-white ml-2">
                  TELLER
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="mt-8 text-white/60 max-w-md text-lg leading-relaxed"
            >
              Crafting cinematic experiences through lens and light.  
              Where emotion meets precision, and every frame tells a story.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="mt-10"
            >
              <a
                href="#portfolio"
                className="btn-editorial bg-gradient-to-r from-red-600 to-orange-500 
                           hover:from-red-700 hover:to-orange-600
                           shadow-[0_0_30px_rgba(255,80,0,0.5)]"
              >
                <span>Explore Works</span>
              </a>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;