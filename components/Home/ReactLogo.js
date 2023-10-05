/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: xenadus (https://sketchfab.com/xenadus)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/react-logo-circle-540ff21ac0f54a038df6f634c7cce726
Title: React logo circle
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ReactLogo({ x, y, z }) {
  const { nodes, materials } = useGLTF("/reactLogo.glb");
  return (
    <group dispose={null} scale={0.115} position={[x, y, z]}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["React-Logo_Material002_0"].geometry}
            material={materials["Material.002"]}
            position={[0, 7.935, 0]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[39.166, 39.166, 52.734]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Backdrop_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-17.091, 7.935, 0]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[247.854, 247.854, 52.734]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/reactLogo.glb");