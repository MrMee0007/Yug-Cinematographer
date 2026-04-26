import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-[#0a0a0a] text-white py-14 px-6 md:px-12 lg:px-20 border-t border-white/10 overflow-hidden"
    >
      {/* 🔥 Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-red-900/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* 🔹 Logo */}
          <div className="flex items-center gap-3 group">
            <span className="accent-dot shadow-[0_0_12px_rgba(255,0,0,0.6)]" />
            <span className="font-display text-lg tracking-[0.25em] uppercase group-hover:text-red-400 transition duration-300">
              JAY SHARMA
            </span>
          </div>

          {/* 🔹 Links */}
          <div className="flex items-center gap-8 text-white/60 text-sm uppercase tracking-widest">
            {["About", "Works", "Services", "Contact"].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="relative group hover:text-red-400 transition duration-300"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* 🔹 Copyright */}
          <p className="text-white/40 text-sm tracking-wide">
            © {new Date().getFullYear()}
          </p>

        </div>

        {/* 🔥 Bottom subtle line */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 tracking-wide">

          <span>
            Crafted with cinematic precision & storytelling.
          </span>

          <div className="flex gap-6">
            <a href="#" className="hover:text-red-400 transition">Privacy</a>
            <a href="#" className="hover:text-red-400 transition">Terms</a>
          </div>

        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;