import { useState, useMemo, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ------------------ DATA ------------------ */

const images = [
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774562789/Photo9_juyekj.webp" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774478218/IMG_1231_uxkiki.webp" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774560979/Img19_xlvbjy.webp" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774560979/Photo1_vdcrpp.webp" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774560979/Photo2_zymbxo.webp" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774478238/IMG_1300_squmym.webp" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774560978/Img18_rtixf4.webp" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774560979/Img22_j8sff4.webp" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774560978/Img21_w152o3.webp" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774478227/IMG_1240_gtxe0q.webp" },
];

const VISIBLE = 5;
const CENTER = Math.floor(VISIBLE / 2);

/* ------------------ IMAGE CARD ------------------ */

const ImageCard = memo(({ img, isCenter, onClick }) => {
  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 160, damping: 20 }}
      className="flex-shrink-0 cursor-pointer"
      onClick={onClick}
      style={{
        width: isCenter
          ? "clamp(180px, 26vw, 380px)"
          : "clamp(100px, 14vw, 200px)",
        height: isCenter
          ? "clamp(240px, 36vw, 480px)"
          : "clamp(140px, 22vw, 260px)",
      }}
    >
      <img
        src={`${img.src}?f_auto,q_auto,w=900`}
        alt=""
        loading={isCenter ? "eager" : "lazy"}
        decoding="async"
        className={`w-full h-full object-cover rounded-xl sm:rounded-2xl transition-all duration-500
          ${isCenter ? "shadow-2xl scale-100" : "opacity-80 scale-95"}
        `}
      />
    </motion.div>
  );
});

/* ------------------ MAIN ------------------ */

function PortfolioCarousel() {
  const [index, setIndex] = useState(0);

  const getImage = useCallback((i) => {
    return images[((i % images.length) + images.length) % images.length];
  }, []);

  const display = useMemo(() => {
    const arr = new Array(VISIBLE);

    for (let i = 0; i < VISIBLE; i++) {
      const pos = index + i - CENTER;
      arr[i] = { img: getImage(pos), key: pos };
    }

    return arr;
  }, [index, getImage]);

  const next = useCallback(() => setIndex((p) => p + 1), []);
  const prev = useCallback(() => setIndex((p) => p - 1), []);

  return (
    <section
      className="
        relative z-10
        bg-gradient-to-br from-white via-gray-100 to-gray-200
        py-12 sm:py-14 md:py-16
        px-5 sm:px-8 md:px-12 lg:px-20
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

        {/* 🔥 TEXT */}
        <div className="max-w-xl w-full text-center lg:text-left">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-3">
            Creative Portfolio
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-black">
            Crafting <br />
            <span className="bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
              Visual Stories
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            A collection of moments, emotions, and creativity — captured and transformed into stunning visual experiences.
          </p>

          <button className="mt-6 sm:mt-8 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-black text-white text-sm sm:text-base font-medium hover:scale-105 active:scale-95 transition">
            Explore Work
          </button>
        </div>

        {/* 🎬 CAROUSEL */}
        <div className="flex flex-col items-center justify-center w-full lg:w-auto">

          {/* IMAGES */}
          <div className="flex gap-3 sm:gap-5 lg:gap-6 items-center justify-center">
            {display.map(({ img, key }, i) => {
              const isCenter = i === CENTER;

              return (
                <ImageCard
                  key={key}
                  img={img}
                  isCenter={isCenter}
                  onClick={() => setIndex((p) => p + (i - CENTER))}
                />
              );
            })}
          </div>

          {/* ARROWS */}
          <div className="flex gap-4 sm:gap-6 mt-6 sm:mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-black hover:text-white active:scale-90 transition"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={next}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-black hover:text-white active:scale-90 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default memo(PortfolioCarousel);