import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Film, Video, Camera, Wand2 } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "High-Impact Social Videos",
    description: "Scroll-stopping edits designed for maximum engagement and reach.",
    number: "01",
  },
  {
    icon: Film,
    title: "Storytelling & Narrative Editing",
    description: "Crafting emotional, cinematic stories that connect deeply with audiences.",
    number: "02",
  },
  {
    icon: Wand2,
    title: "Motion Graphics & VFX",
    description: "Dynamic visuals, transitions, and effects that elevate your content.",
    number: "03",
  },
  {
    icon: Camera,
    title: "Food & Beverage Visuals",
    description: "Appetizing, high-end visuals designed to trigger craving and attention.",
    number: "04",
  },
  {
    icon: Camera,
    title: "Jewelry & Luxury Branding",
    description: "Elegant, premium visuals that reflect exclusivity and craftsmanship.",
    number: "05",
  },
  {
    icon: Video,
    title: "Hook Videos & Ad Creatives",
    description: "Strong first 3 seconds that capture attention and drive conversions.",
    number: "06",
  },
  {
    icon: Film,
    title: "Fast-Paced Editing Techniques",
    description: "High-energy cuts, transitions, and rhythm-driven storytelling.",
    number: "07",
  },
  {
    icon: Wand2,
    title: "Creative Storytelling",
    description: "Blending visuals, sound, and narrative into impactful experiences.",
    number: "08",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="services"
      ref={ref}
      className="relative bg-[#0a0a0a] py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* 🔥 Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-red-900/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-start gap-4 mb-8">
            <span className="accent-dot-large mt-6 shadow-lg shadow-red-500/40" />
            <div>
              <h2 className="editorial-heading-large text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                SER—
              </h2>
              <h2 className="editorial-heading-large text-white -mt-2 md:-mt-4">
                VICES
              </h2>
            </div>
          </div>

          <p className="text-white/60 max-w-xl ml-9">
            Comprehensive creative services tailored to your vision.
            Every project is crafted to deliver impact, emotion, and excellence.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.1,
                }}
                className="relative bg-[#111] p-8 md:p-10 group cursor-pointer overflow-hidden"
              >
                {/* 🔥 COVER ANIMATION */}
                <div
                  className="absolute inset-0 
                  bg-gradient-to-br from-red-600 to-orange-500
                  translate-y-full group-hover:translate-y-0
                  transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                />

                {/* Depth layer */}
                <div
                  className="absolute inset-0 
                  bg-black/60 
                  translate-y-full group-hover:translate-y-0
                  transition-transform duration-700"
                />

                {/* Border glow */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-red-500/60 transition duration-500" />

                {/* Content */}
                <div className="relative z-10">

                  {/* Number */}
                  <span
                    className="font-display text-6xl md:text-7xl 
                    text-white/10 
                    group-hover:text-transparent 
                    bg-clip-text 
                    group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-orange-500
                    transition-all duration-500 
                    absolute top-0 right-0
                    group-hover:scale-110
                    group-hover:drop-shadow-[0_0_20px_rgba(255,80,80,0.4)]"
                  >
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div className="mb-6 text-red-500 group-hover:text-white transition duration-300">
                    <Icon size={36} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl uppercase mb-4 text-white group-hover:text-white transition">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 group-hover:text-white/80 transition duration-300 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-6 flex items-center gap-2 text-red-400 group-hover:text-white transition">
                    <span className="text-xs uppercase tracking-widest">
                      Learn more
                    </span>
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>

                {/* 🔥 Subtle glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.15),transparent_70%)]" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection; 