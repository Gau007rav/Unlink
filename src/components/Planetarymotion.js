// PlanetaryMotion.js
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

// Component to create a rotating planet
const Planet = ({
  radius,
  speed,
  color,
  position,
  orbitRadius,
  orbitSpeed,
}) => {
  const ref = React.useRef();
  const [angle, setAngle] = React.useState(0);

  useFrame(() => {
    // Update planet rotation
    ref.current.rotation.y += speed;
    // Update planet's orbit position
    setAngle((prev) => prev + orbitSpeed);
    ref.current.position.x = orbitRadius * Math.cos(angle);
    ref.current.position.z = orbitRadius * Math.sin(angle);
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// Main component
const PlanetaryMotion = () => {
  return (
    <div className="relative h-screen w-full">
      <Canvas
        className="absolute inset-0"
        camera={{ position: [0, 0, 10], fov: 60 }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} />
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial color="yellow" />
        </mesh>
        <Planet
          radius={1}
          speed={0.01}
          color="blue"
          orbitRadius={4}
          orbitSpeed={0.02}
        />
        <Planet
          radius={0.5}
          speed={0.02}
          color="red"
          orbitRadius={6}
          orbitSpeed={0.015}
        />
        <Planet
          radius={0.3}
          speed={0.03}
          color="green"
          orbitRadius={8}
          orbitSpeed={0.01}
        />
        <OrbitControls />
      </Canvas>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute bottom-0 left-0 p-4 text-white text-center"
      ></motion.div>
    </div>
  );
};

export default PlanetaryMotion;
