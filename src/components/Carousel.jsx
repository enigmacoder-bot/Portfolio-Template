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
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black h-full w-full fixed inset-0"
            />
            <motion.div
              ref={containerRef}
              className="max-w-5xl mx-auto bg-[#000000] dark:bg-[#000000] h-fit z-[60] my-10 p-4 rounded-3xl relative"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black rounded-full"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100" />
              </button>
              <p className="text-base font-medium text-black">
                {card.category}
              </p>
              <p className="text-2xl font-semibold text-neutral-700 mt-4">
                {card.title}
              </p>
              <div className="py-10">{card.content}</div>
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

export const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
