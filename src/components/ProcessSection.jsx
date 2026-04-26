import { useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We begin with conversation — listening to your vision, your brand, and the emotion you want to evoke.",
    keyword: "Listen",
  },
  {
    number: "02",
    title: "Develop",
    description:
      "Treatments, mood boards, shot lists. Every cinematic decision is intentional and grounded in story.",
    keyword: "Craft",
  },
  {
    number: "03",
    title: "Direct",
    description:
      "On set, light becomes language. We move with precision, patience, and an unwavering eye for detail.",
    keyword: "Capture",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Color, sound, finish. The final frame is sculpted until it feels inevitable.",
    keyword: "Refine",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 🔥 Scroll progress for timeline
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Smooth progress animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={ref}
      className="relative bg-[#0a0a0a] py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* 🔥 PAGE LOADING BAR */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 to-orange-400 origin-left z-50"
      />

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-red-900/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 lg:mb-24"
        >
          <div className="lg:col-span-7">
            <div className="flex items-start gap-4 mb-6">
              <span className="accent-dot-large mt-6 shadow-lg shadow-red-500/40" />
              <div>
                <h2 className="editorial-heading-large text-white">THE</h2>
                <h2 className="editorial-heading-large text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 -mt-2 md:-mt-4">
                  PROCESS
                </h2>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-12">
            <p className="text-white/60 text-lg leading-relaxed max-w-md">
              Four chapters, one cinematic vision.
            </p>
          </div>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">

          {/* Base line */}
          <div className="absolute left-[1.6rem] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

          {/* 🔥 PROGRESS LINE */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-[1.6rem] md:left-1/2 top-0 w-px h-full 
                       bg-gradient-to-b from-red-500 to-orange-400 
                       origin-top md:-translate-x-1/2"
          />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + index * 0.15,
                  }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center group"
                >

                  {/* Dot */}
                  <div className="absolute left-[1.6rem] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 ring-8 ring-black z-10 shadow-lg shadow-red-500/50" />

                  {/* NUMBER */}
                  <div
                    className={`pl-16 md:pl-0 ${
                      isEven
                        ? "md:text-right md:pr-20"
                        : "md:order-2 md:pl-20"
                    }`}
                  >
                    <span
                      className="font-display block leading-none 
                                 text-transparent bg-clip-text 
                                 bg-gradient-to-r from-white to-gray-500
                                 group-hover:from-red-400 group-hover:to-orange-400
                                 transition-all duration-500"
                      style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}
                    >
                      {step.number}
                    </span>

                    <span className="text-white/40 text-xs uppercase tracking-[0.4em] mt-2 inline-block group-hover:text-red-400 transition">
                      — {step.keyword}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div
                    className={`pl-16 md:pl-0 ${
                      isEven
                        ? "md:pl-20"
                        : "md:order-1 md:text-right md:pr-20"
                    }`}
                  >
                    <h3 className="font-display text-3xl md:text-5xl uppercase text-white mb-4 group-hover:text-red-400 transition">
                      {step.title}
                    </h3>

                    <p className="text-white/60 group-hover:text-white/80 leading-relaxed max-w-md inline-block transition">
                      {step.description}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;