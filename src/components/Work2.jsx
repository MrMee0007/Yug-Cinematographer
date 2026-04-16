import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect, useCallback, memo } from "react";

/* ------------------ DATA ------------------ */

const categories = ["All", "Event", "Promotion", "Invite", "Wishing"];

const works = [
  {
    id: 1,
    title: "Event Invitation Design",
    category: "Event",
    img: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774292167/Copy_of_Invite_1_def2fe.png",
    desc: "Elegant and religious invitation design for a Pooja.",
    tools: ["Canva"],
    year: "2024",
  },
  {
    id: 2,
    title: "Event Poster Design",
    category: "Event",
    img: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774292166/Copy_of_inder_sahani_final_1_xtfkk7.png",
    desc: "Bold typography and composition focused on capturing attention instantly.",
    tools: ["Canva", "InDesign"],
    year: "2023",
  },
  {
    id: 3,
    title: "Hiring Poster Design",
    category: "Invite",
    img: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774292164/Copy_of_Pratibha_hiring_44.png_1_hpjd97.png",
    desc: "Minimal and user-focused interface designed for seamless interaction.",
    tools: ["Canva"],
    year: "2024",
  },
  {
    id: 4,
    title: "Organization Promotion Design",
    category: "Promotion",
    img: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774292164/Copy_of_Kanha_International_Academy.png_1_a6gztr.png",
    desc: "Clean and modern design to promote an educational institution.",
    tools: ["Canva"],
    year: "2024",
  },
  {
    id: 5,
    title: "Invitation Design",
    category: "Invite",
    img: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774292164/Copy_of_IMG_5757_1_u3ri1m.png",
    desc: "Promoting and inviting an Event with a focus on elegance and simplicity.",
    tools: ["Canva"],
    year: "2024",
  },
  {
    id: 6,
    title: "Promotional Poster Design",
    category: "Promotion",
    img: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774292164/Copy_of_IMG_5758_1_uoxdsu.png",
    desc: "Clean and modern design to promote an educational institution.",
    tools: ["Canva"],
    year: "2024",
  },
  {
    id: 7,
    title: "Congratulatory Poster Design",
    category: "Wishing",
    img: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774292162/Copy_of_IMG_5467_1_ytfckc.png",
    desc: "Creative and vibrant design to celebrate and congratulate an achievement.",
    tools: ["Canva"],
    year: "2024",
  },
  {
    id: 8,
    title: "Congratulatory Poster Design",
    category: "Wishing",
    img: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774292161/Copy_of_IMG_1420_1_fwygul.png",
    desc: "Creative and vibrant design to celebrate and congratulate an achievement.",
    tools: ["Canva"],
    year: "2023",
  },
];

/* ------------------ COMPONENTS ------------------ */

// ✅ Memoized Filter Button
const FilterButton = memo(({ cat, selected, onClick }) => {
  const handleClick = useCallback(() => onClick(cat), [cat, onClick]);

  return (
    <button
      onClick={handleClick}
      className={`px-6 py-2 rounded-full text-sm font-medium transition
      ${
        selected === cat
          ? "bg-black text-white shadow-lg scale-105"
          : "bg-white border text-gray-600 hover:bg-gray-100"
      }`}
    >
      {cat}
    </button>
  );
});

// ✅ Memoized Work Card
const WorkCard = memo(
  ({ item, isActive, isDimmed, onHover, onLeave, onSelect }) => {
    return (
      <motion.div
        layout
        onHoverStart={() => onHover(item.id)}
        onHoverEnd={onLeave}
        onClick={() => onSelect(item)}
        className={`relative rounded-3xl overflow-hidden bg-white shadow-md cursor-pointer
        ${isDimmed ? "opacity-50 scale-95" : ""}`}
        whileHover={{ scale: 1.06, y: -4 }}
      >
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="w-full h-56 sm:h-64 object-cover"
        />

        {/* Overlay */}
        <motion.div
          initial={false}
          animate={{ opacity: isActive ? 1 : 0 }}
          className="absolute inset-0 bg-white/95 p-5 flex flex-col justify-end"
        >
          <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
          <p className="text-sm text-gray-600 mt-2">{item.desc}</p>

          <div className="flex gap-2 mt-3 flex-wrap">
            {item.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs px-2 py-1 bg-gray-200 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  }
);

/* ------------------ MODAL ------------------ */

const WorkModal = memo(({ work, onClose }) => {
  const handleKey = useCallback(
    (e) => e.key === "Escape" && onClose(),
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl font-bold"
      >
        ✕
      </button>

      {/* Image */}
      <motion.div
        className="w-full h-full flex items-center justify-center p-6"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
      >
        <img
          src={work.img}
          alt={work.title}
          className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
        />
      </motion.div>

      {/* Info */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold">{work.title}</h2>
        <p className="text-sm opacity-70 mt-1">{work.year}</p>
      </div>
    </motion.div>
  );
});

/* ------------------ MAIN ------------------ */

export default function DesignerShowcase() {
  const [active, setActive] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedWork, setSelectedWork] = useState(null);

  // ✅ Stable handlers
  const handleHover = useCallback((id) => setActive(id), []);
  const handleLeave = useCallback(() => setActive(null), []);
  const handleSelect = useCallback((item) => setSelectedWork(item), []);
  const handleClose = useCallback(() => setSelectedWork(null), []);

  // ✅ Memoized filtering
  const filteredWorks = useMemo(() => {
    if (selectedCategory === "All") return works;
    return works.filter((w) => w.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 sm:px-6 py-14">

      {/* HERO */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
          <span className="bg-gradient-to-r from-black via-gray-700 to-gray-400 bg-clip-text text-transparent">
            Graphic Design
          </span>
          <br />
          <span className="text-gray-900">That Speaks Visually</span>
        </h1>
      </div>

      {/* FILTERS */}
      <div className="flex gap-4 flex-wrap justify-center mb-12">
        {categories.map((cat) => (
          <FilterButton
            key={cat}
            cat={cat}
            selected={selectedCategory}
            onClick={setSelectedCategory}
          />
        ))}
      </div>

      {/* GRID */}
      <motion.div
        layout
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {filteredWorks.map((item) => {
          const isActive = active === item.id;
          const isDimmed = active && active !== item.id;

          return (
            <WorkCard
              key={item.id}
              item={item}
              isActive={isActive}
              isDimmed={isDimmed}
              onHover={handleHover}
              onLeave={handleLeave}
              onSelect={handleSelect}
            />
          );
        })}
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedWork && (
          <WorkModal work={selectedWork} onClose={handleClose} />
        )}
      </AnimatePresence>
    </div>
  );
}