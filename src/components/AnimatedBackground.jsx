// AnimatedBackground.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Sphere args={[1.8, 128, 128]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#6d28d9"
            attach="material"
            distort={0.6}
            speed={2}
            roughness={0.3}
            metalness={0.2}
          />
        </Sphere>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
