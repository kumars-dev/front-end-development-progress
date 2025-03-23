import React from "react";
import {
  RiCss3Line,
  RiHtml5Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiWordpressFill,
} from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
const iconvariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <RiHtml5Line className="text-7xl" />
        </motion.div>
        <motion.div className="p-4"
         initial="initial"
         animate="animate"
         variants={iconvariants(3)}>
          <RiCss3Line className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div className="p-4"
         initial="initial"
         animate="animate"
         variants={iconvariants(3.5)}>
          <RiJavascriptLine className="text-7xl" />
        </motion.div>
        <motion.div className="p-4"
         initial="initial"
         animate="animate"
         variants={iconvariants(4)}>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div className="p-4"
         initial="initial"
         animate="animate"
         variants={iconvariants(2.5)}>
          <RiWordpressFill className="text-7xl " />
          {/* <RiReactjsLine className="text-7xl text-cyan-400" /> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
