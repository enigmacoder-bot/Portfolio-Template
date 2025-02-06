import React, {
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import useOutsideClick from "../hooks/useOutsideClick";
import "../../src/App.css";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("Carousel");
  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    checkScrollability();
  }, []);

  return (
    <CarouselContext.Provider
      value={{ onCardClose: setCurrentIndex, currentIndex }}
    >
      <div className="relative bg-black">
        <div
          className="flex overflow-x-scroll py-10 md:py-20 scroll-smooth no-scrollbar"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className="flex flex-row justify-between gap-8 pl-4 max-w-7xl mx-auto">
            {items.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-72 px-4">
                {item}
              </div>
            ))}
          </div>
        </div>
        {canScrollLeft && (
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2"
            onClick={scrollPrev}
          >
            <IconArrowNarrowLeft />
          </button>
        )}
        {canScrollRight && (
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2"
            onClick={scrollNext}
          >
            <IconArrowNarrowRight />
          </button>
        )}
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({ card, index }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") handleClose();
    };
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div
            className="fixed inset-0 h-screen z-50 overflow-auto"
            onClick={handleClose}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              className="bg-black h-full w-full fixed inset-0"
            />
            <motion.div
              ref={containerRef}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              exit={{
                scale: 0.95,
                opacity: 0,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              className="max-w-5xl mx-auto bg-[#000000] h-fit z-[60] my-10 p-4 rounded-3xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black rounded-full"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100" />
              </button>
              <DummyContent card={card} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={handleOpen}
        className="rounded-3xl bg-black h-80 w-[18rem] md:h-[35rem] overflow-hidden flex flex-col items-start relative"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 to-transparent z-30" />
        <div className="relative z-40 p-8">
          <p className="text-white text-sm font-medium">{card.category}</p>
          <p className="text-white text-xl font-semibold max-w-xs mt-2">
            {card.title}
          </p>
        </div>
        <img
          src={card.src}
          alt={card.title}
          className="object-cover w-full h-full"
        />
      </motion.button>
    </>
  );
};

export const DummyContent = ({ card }) => {
  return (
    <div className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-200">{card.title}</span>{" "}
        {card.description}
      </p>
      <img
        src={card.src}
        alt={card.title}
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
      <a
        href={card.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline mt-4 block text-center"
      >
        See the preview of the project
      </a>
    </div>
  );
};
