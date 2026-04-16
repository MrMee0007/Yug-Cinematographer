import { motion } from "framer-motion";

export default function SkillsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white px-6 md:px-20 lg:px-28 py-20 md:py-28 lg:py-36">

      {/* Massive Background Word */}
      <h2 className="absolute top-24 left-1/2 -translate-x-1/2 text-[22vw] sm:text-[18vw] md:text-[14vw] lg:text-[12vw] font-black text-blue-100/40 tracking-tight select-none pointer-events-none">
        EXPERTISE
      </h2>

      {/* Glow Effects (bigger + softer) */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] bg-blue-500/20 blur-[220px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] bg-indigo-400/20 blur-[200px] rounded-full" />

      <div className="relative z-10 max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 md:gap-24 lg:gap-32 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.5em] text-sm md:text-base text-blue-600 mb-6 font-semibold">
            What I Bring
          </p>

          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight">
            Crafting Visual
            <span className="block bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h3>

          <p className="mt-8 md:mt-10 text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
            A carefully cultivated blend of cinematic storytelling, creative
            direction and technical execution — refined through real-world
            productions and collaborative leadership.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="p-8 sm:p-10 md:p-12 lg:p-14 rounded-3xl bg-white/70 backdrop-blur-2xl border border-blue-100 shadow-[0_30px_60px_rgba(0,0,0,0.1)] space-y-6 md:space-y-8">

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              I specialize in{" "}
              <span className="font-semibold text-slate-900">
                cinematography
              </span>{" "}
              — mastering light, composition, and movement to translate
              emotion into powerful visual narratives.
            </p>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              With deep expertise in{" "}
              <span className="font-semibold text-slate-900">
                video editing & post-production
              </span>
              , I craft seamless stories using industry tools while maintaining
              precision and creative clarity.
            </p>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              My foundation in{" "}
              <span className="font-semibold text-slate-900">
                design, leadership and collaboration
              </span>{" "}
              ensures every project balances aesthetic excellence with
              strategic execution.
            </p>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              I bring structure, communication and time discipline into
              creative workflows — delivering premium results without
              compromising artistic integrity.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}