import { motion } from "framer-motion";
import React from "react";

export const Background = ({ children, className = "", svgOptions = {} }) => {
  return (
    <div
      className={`relative h-[20rem] md:h-screen w-full bg-white dark:bg-black ${className}`}
    >
      <SVG svgOptions={svgOptions} />
      {children}
    </div>
  );
};

const SVG = ({ svgOptions }) => {
  const { paths = [], colors = [] } = svgOptions;

  if (paths.length !== colors.length) {
    console.error("Mismatch between paths and colors array lengths");
    return null;
  }

  return (
    <svg>
      {paths.map((path, index) => (
        <motion.path key={index} d={path} fill={colors[index]} />
      ))}
    </svg>
  );
};
