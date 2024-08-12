// AnimatedParagraph.js
import React from "react";
import { motion } from "framer-motion";

const AnimatedParagraph = () => {
  // Define the animation variants
  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Define the line delay
  const delay = 5;

  return (
    <div className="p-4">
      <p className="text-xl font-normal text-white  font-serif">
        {/* Split the paragraph into lines */}
        <motion.span
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          transition={{ duration: 1, delay: 0 * delay }}
          className="block"
        >
          <li>You can’t travel in time But You can travel in Space.</li>
        </motion.span>
        <motion.span
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          transition={{ duration: 2, delay: 1 * delay }}
          className="block"
        >
          <li>Disvcover Yourself from Shunya to Infinite in this Universe</li>
        </motion.span>
        <motion.span
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          transition={{ duration: 3, delay: 2 * delay }}
          className="block"
        >
          <li>Ab Mars dur nhi..</li>
        </motion.span>
        {/* Add more lines as needed */}
      </p>
    </div>
  );
};

export default AnimatedParagraph;
