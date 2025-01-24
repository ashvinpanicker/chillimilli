import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const GummyCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  useEffect(() => {
    if (meshRef.current) {
      const geometry = meshRef.current.geometry;
      const position = geometry.attributes.position;
      const colors = [];

      // Apply red-to-green gradient based on vertex Y position
      for (let i = 0; i < position.count; i++) {
        const y = position.getY(i); // Get the Y-coordinate
        const factor = (y + 0.5) / 1; // Normalize Y to range [0, 1]
        colors.push(1 - factor, factor, 0); // Red to Green
      }

      geometry.setAttribute(
        'color',
        new THREE.Float32BufferAttribute(colors, 3)
      );
    }
  }, []);

  return (
    <RoundedBox
      ref={meshRef}
      args={[0.8, 0.8, 0.8]} // Cube size
      radius={0.15} // Rounded edges for a softer look
      smoothness={16} // High smoothness for a jelly-like surface
    >
      <meshPhysicalMaterial
        vertexColors // Enable vertex colors for the gradient
        transparent
        transmission={0.95} // High transmission for jelly translucency
        thickness={0.5} // Light refraction effect
        roughness={0.2} // Slightly rough for a soft texture
        clearcoat={1} // Glossy top layer
        clearcoatRoughness={0.1} // Subtle imperfections in gloss
        ior={1.4} // Index of refraction for a gummy effect
        attenuationDistance={1.5} // Light fades inside the material
        attenuationColor="#ff6666" // Add a slight red tint inside
      />
    </RoundedBox>
  );
};

export default GummyCube;
