import React, { useState } from "react";
import "./App.css";
import { BackgroundLines } from "./components/BackgroundLines";
import { Typewriter } from "./components/Typewriter";
import { Carousel, Card, DummyContent } from "./components/Carousel";
import Footer from "./components/Footer";
import { AppleStyleDock } from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import { WobbleCard } from "./components/WobbleCard";
import Testimonials from "./components/Testimonials";
import StackIcon from "tech-stack-icons";
const words = [
  { text: "Software" },
  { text: "Developer.", className: "text-blue-500 dark:text-blue-500" },
];

const data = [
  {
    category: "Project 1",
    title: "AI-Powered Chatbot",
    src: "https://picsum.photos/id/0/5000/3333",
    description:
      "An AI-powered chatbot that can assist users with various tasks.",
    link: "https://example.com/chatbot",
    content: <DummyContent />,
  },
  {
    category: "Project 2",
    title: "E-commerce Platform",
    src: "https://picsum.photos/id/0/5000/3333",
    description: "A comprehensive e-commerce platform for online shopping.",
    link: "https://example.com/ecommerce",
    content: <DummyContent />,
  },
  {
    category: "Project 3",
    title: "Social Media App",
    src: "https://picsum.photos/id/0/5000/3333",
    description: "A social media app to connect with friends and family.",
    link: "https://example.com/socialmedia",
    content: <DummyContent />,
  },
  {
    category: "Project 4",
    title: "Fitness Tracker",
    src: "https://picsum.photos/id/0/5000/3333",
    description:
      "A fitness tracker to monitor your daily activities and health.",
    link: "https://example.com/fitnesstracker",
    content: <DummyContent />,
  },
  {
    category: "Project 5",
    title: "Weather Forecasting",
    src: "https://picsum.photos/id/0/5000/3333",
    description:
      "A weather forecasting app to keep you updated with the latest weather.",
    link: "https://example.com/weather",
    content: <DummyContent />,
  },
  {
    category: "Project 6",
    title: "Online Learning Platform",
    src: "https://picsum.photos/id/0/5000/3333",
    description:
      "An online learning platform for various courses and tutorials.",
    link: "https://example.com/learning",
    content: <DummyContent />,
  },
];

const cards = data.map((card, index) => (
  <Card key={card.src} card={card} index={index} />
));

function App() {
  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="relative z-50 bg-black">
        <AppleStyleDock />
      </div>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2
          id="home"
          className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight"
        >
          Patrick Jane <br />{" "}
        </h2>
        <Typewriter words={words} />
      </BackgroundLines>
      <h2
        id="projects"
        className="text-white text-2xl sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold ml-8 underline decoration-indigo-500"
      >
        Projects
      </h2>
      <Carousel items={cards} />
      <h2
        id="skills"
        className="text-white text-2xl md:text-xl lg:text:3xl xl:text-5xl font-bold ml-8 underline decoration-blue-500"
      >
        Skills
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full py-10 bg-black">
        <WobbleCard
          containerClassName="col-span-1 h-full bg-pink-800 min-h-[200px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Web Development
            </h2>
            {/* <p className="mt-4 text-left text-base/6 text-neutral-200">
              With over 100,000 monthly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p> */}
          </div>
          <img
            src="/linear.webp"
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
          <div className="mt-4">
            <StackIcon name="nextjs" className="w-16 h-16 sm:w-12 sm:h-12" />
            <StackIcon name="reactjs" className="w-16 h-16 sm:w-12 sm:h-12" />
            <StackIcon name="nodejs" className="w-16 h-16 sm:w-12 sm:h-12" />
            <StackIcon name="mongodb" className="w-16 h-16 sm:w-12 sm:h-12" />
            <StackIcon
              name="tailwindcss"
              className="w-16 h-16 sm:w-12 sm:h-12"
            />
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[200px]">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Programming Languages
          </h2>
          {/* <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            If someone yells “stop!”, goes limp, or taps out, the fight is over.
          </p> */}
          <div className="mt-4">
            <StackIcon name="js" className="w-16 h-16 sm:w-12 sm:h-12" />
            <StackIcon name="python" className="w-16 h-16 sm:w-12 sm:h-12" />
            <StackIcon name="java" className="w-16 h-16 sm:w-12 sm:h-12" />
          </div>
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 bg-green-300  min-h-[200px] lg:min-h-[600px] xl:min-h-[300px]"
          className=""
        >
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Software Tools & Technologies
            </h2>
            {/* <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              With over 100,000 monthly active bot users
            </p> */}
          </div>
          <img
            src="/linear.webp"
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
          <div className="mt-4">
            <StackIcon name="vscode" className="w-16 h-16 sm:w-12 sm:h-12" />
            <StackIcon name="git" className="w-16 h-16 sm:w-12 sm:h-12" />
            <StackIcon name="figma" className="w-16 h-16 sm:w-12 sm:h-12" />
            <StackIcon name="linux" className="w-16 h-16 sm:w-12 sm:h-12" />
            <StackIcon name="netlify" className="w-16 h-16 sm:w-12 sm:h-12" />
          </div>
        </WobbleCard>
      </div>
      <h2
        id="testimonials"
        className="text-white text-2xl md:text-xl lg:text:3xl xl:text-5xl font-bold ml-8 underline decoration-green-500"
      >
        Testimonials
      </h2>
      <Testimonials />
      <h2
        id="contact"
        className="text-white text-2xl md:text-xl lg:text:3xl xl:text-5xl font-bold ml-8 underline decoration-red-500"
      >
        Contact
      </h2>
      <div className="flex justify-center py-10 bg-black">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default App;
