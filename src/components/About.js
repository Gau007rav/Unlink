import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// Define the animation variants
const sectionVariants = {
  hidden: { opacity: 0, x: "-100%" },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 3 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const ThreeSections = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div className="bg-black text-white py-12 px-4 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        {/* First Section */}
        <motion.section
          className="flex flex-col lg:flex-row items-center lg:justify-start lg:space-x-12 mb-12"
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="text-left lg:text-left w-full lg:w-1/2 mt-10">
            <h2 className="text-2xl lg:text-4xl font-bold mb-2">
              How Space Agencies Work
            </h2>
            <h3 className="text-xl lg:text-2xl font-semibold mb-4">
              Understanding Their Operation
            </h3>
            <p className="text-base lg:text-lg leading-relaxed">
              Space agencies operate as governmental or private organizations
              dedicated to the exploration and advancement of space technology.
              They conduct scientific research, develop spacecraft, and execute
              space missions to gather data about our universe. Their work
              involves collaboration with international space agencies, private
              industry, and scientific communities to push the boundaries of
              what we know about space and improve technologies that benefit
              humanity.
            </p>
          </div>
        </motion.section>

        {/* Second Section */}
        <motion.section
          className="flex flex-col lg:flex-row items-center lg:justify-end lg:space-x-12 mb-12"
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="text-left lg:text-right w-full lg:w-1/2 ml-20">
            <h2 className="text-2xl lg:text-4xl font-bold mb-2">
              The Space Exploration Journey
            </h2>
            <h3 className="text-xl lg:text-2xl font-semibold mb-4">
              From Launch to Discovery
            </h3>
            <p className="text-base lg:text-lg leading-relaxed">
              Space missions require rigorous planning, coordination, and
              execution, involving numerous stages from launch to data
              collection.We know only one percent of our solar system.we have to
              make a spaceship which can travel among the galaxies for the
              exploration we are working on that.keep exploring.be happy.
            </p>
          </div>
        </motion.section>

        {/* Third Section */}
        <motion.section
          ref={ref}
          className="flex justify-center"
          variants={imageVariants}
          initial="hidden"
          animate={controls}
        >
          <img
            src="https://i.redd.it/u0exvyntuhu51.jpg"
            alt="Sliding"
            className="w-96 lg:w-2/3 h-auto rounded-lg shadow-lg"
          />
        </motion.section>
      </div>
    </div>
  );
};

export default ThreeSections;
