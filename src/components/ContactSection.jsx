import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-[#050505] py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* 🔥 Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-red-900/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT */}
          <div>
            {/* HEADER */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-start gap-4 mb-12"
            >
              <span className="accent-dot-large mt-6 shadow-[0_0_20px_rgba(255,80,0,0.6)]" />
              <div>
                <h2 className="editorial-heading-large text-white">LET’S</h2>
                <h2 className="editorial-heading-large text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 -mt-2 md:-mt-4">
                  CREATE
                </h2>
              </div>
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/60 text-lg leading-relaxed mb-12 ml-9 max-w-md"
            >
              Whether it’s a high-impact reel, brand storytelling, or cinematic
              edits — I help transform raw footage into powerful visual
              experiences that capture attention and drive engagement.
            </motion.p>

            {/* CONTACT INFO */}
            <div className="space-y-6 ml-9">

              {/* EMAIL */}
              <motion.a
                href="mailto:youremail@gmail.com"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 
                                flex items-center justify-center 
                                shadow-[0_0_15px_rgba(255,80,0,0.3)]
                                group-hover:bg-red-500 group-hover:border-red-500 transition">
                  <Mail size={18} className="text-red-400 group-hover:text-white" />
                </div>
                <span className="text-white/80 group-hover:text-orange-400 transition">
                  youremail@gmail.com
                </span>
              </motion.a>

              {/* PHONE */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/20 
                                flex items-center justify-center">
                  <Phone size={18} className="text-white" />
                </div>
                <span className="text-white/60">+91 XXXXX XXXXX</span>
              </motion.div>

              {/* LOCATION */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/20 
                                flex items-center justify-center">
                  <MapPin size={18} className="text-white" />
                </div>
                <span className="text-white/60">
                  India (Available Worldwide)
                </span>
              </motion.div>
            </div>

            {/* SOCIAL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4 mt-12 ml-9"
            >
              {[Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 border border-white/20 flex items-center justify-center
                             bg-white hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-400
                             hover:border-transparent hover:text-white
                             transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 overflow-hidden"
          >
            {/* glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-400/10 opacity-30" />

            <h3 className="relative font-display text-2xl text-white uppercase mb-8">
              Start Your Project
            </h3>

            <form onSubmit={handleSubmit} className="relative space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent border-b border-white/20 py-3 text-white 
                           placeholder:text-white/40 focus:border-orange-400 transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent border-b border-white/20 py-3 text-white 
                           placeholder:text-white/40 focus:border-orange-400 transition"
              />

              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-transparent border-b border-white/20 py-3 text-white 
                           placeholder:text-white/40 focus:border-orange-400 resize-none transition"
              />

              <button
                type="submit"
                className="w-full mt-8 py-4 bg-gradient-to-r from-red-500 to-orange-400 
                           hover:from-red-600 hover:to-orange-500
                           text-white uppercase tracking-widest transition-all duration-300"
              >
                Send Message
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;