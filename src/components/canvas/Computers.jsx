import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";

import CanvasLoader from "../Loader";


// 3D Computer Model
const Computers = ({ isMobile }) => {

  const computer = useGLTF("./desktop_pc/scene.gltf");

  const computerRef = useRef();

  // Smooth auto rotation
  useFrame(() => {
    if (computerRef.current) {
      computerRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh>

      {/* Premium Lighting */}
      <hemisphereLight intensity={0.3} groundColor="black" />

      <spotLight
        position={[10, 20, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />

      <pointLight intensity={1.2} />

      {/* Floating Animation */}
      <Float
        speed={2}
        rotationIntensity={0.4}
        floatIntensity={1}
      >

        <primitive
          ref={computerRef}
          object={computer.scene}
          scale={isMobile ? 0.6 : 0.75}
          position={isMobile ? [0, -3, -2.2] : [0, -3.2, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />

      </Float>

    </mesh>
  );
};


// Canvas
const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };

  }, []);

  return (

    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >

      <Suspense fallback={<CanvasLoader />}>

        <OrbitControls
          enableZoom={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Computers isMobile={isMobile} />

      </Suspense>

      <Preload all />

    </Canvas>

  );
};

export default ComputersCanvas;