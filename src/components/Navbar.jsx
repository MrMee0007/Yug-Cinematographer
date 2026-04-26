import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { useState, memo } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/works" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 
        h-[70px] md:h-[80px]
        px-5 md:px-12 lg:px-20
        flex justify-between items-center
        bg-black/30 backdrop-blur-xl border-b border-white/10"
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 md:gap-3">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-400 shadow-[0_0_12px_rgba(255,80,0,0.8)]" />
          <span className="font-display text-white text-sm md:text-lg tracking-[0.25em] md:tracking-[0.3em] uppercase">
            Jay Sharma
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-10 lg:gap-14 text-xs tracking-[0.3em] uppercase">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative transition ${
                  isActive ? "text-white" : "text-white/50 hover:text-white"
                }`
              }
            >
              {link.name}

              {/* underline */}
              <span
                className={({ isActive }) =>
                  `absolute left-0 -bottom-2 h-[1px] bg-gradient-to-r from-red-500 to-orange-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`
                }
              />
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-5 py-2 text-xs uppercase tracking-[0.3em] 
            border border-white/20 text-white/80 
            hover:border-orange-400 hover:text-white transition"
          >
            Hire Me
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[70px] md:top-[80px] left-0 right-0 z-40
            bg-black/95 backdrop-blur-xl
            flex flex-col items-center gap-8 py-10"
          >
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-[0.4em] ${
                    isActive
                      ? "text-orange-400"
                      : "text-white/60 hover:text-orange-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 px-8 py-3 border border-white/20 
              hover:border-orange-400 transition uppercase tracking-widest text-sm"
            >
              Hire Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Navbar);