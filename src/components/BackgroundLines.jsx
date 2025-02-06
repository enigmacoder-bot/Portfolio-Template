import { motion } from "framer-motion";
import React from "react";
import SVG from "./SVG";
import { AppleStyleDock } from "./Navbar";
export const BackgroundLines = ({
  children,
  className = "",
  svgOptions = {},
}) => {
  return (
    <>
      {/* <div className="absolute z-999 flex items-center justify-center w-full pt-2">
        <AppleStyleDock />
      </div> */}
      <div
        className={`relative h-[20rem] md:h-screen w-full bg-black ${className}`}
      >
        <SVG svgOptions={svgOptions} />
        {children}
      </div>
    </>
  );
};
