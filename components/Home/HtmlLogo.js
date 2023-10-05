/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Erik Egnatosyan (https://sketchfab.com/sans.egnatosyan)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/html-logo-3d-model-ab8b32cab3364027ab00a033a0b2ff38
Title: HTML logo 3d model
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function HtmlLogo({ x, y, z }) {
  const { nodes, materials } = useGLTF("/html.glb");
  return (
    <group dispose={null} position={[x, y, z]} scale={0.003}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[24.052, 117.48, 10.526]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.001}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials["Material.010"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials["Material.011"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["Material.009"]}
            position={[18.962, 117.48, 10.526]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials["Material.012"]}
            position={[42.712, 209.044, 23.565]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/html.glb");
