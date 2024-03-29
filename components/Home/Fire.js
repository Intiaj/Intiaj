import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Fire() {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/fire.glb");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (typeof document !== "undefined") {
      actions[names[0]].reset().play();
    }

  }, []);
  return (
    <group ref={group} position={[2.5, 0, -2.1]} dispose={null} scale={0.9}>
      <pointLight intensity={1.5} distance={50} color={"orange"} />

      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="db63cf47b674497bb5667986891360e3fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="gtmfc_fire_1"
                  position={[0, -0.044, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group
                    name="fireA_005"
                    position={[0.014, 0, 0]}
                    scale={1.075}
                  >
                    <mesh
                      name="fireA_005_fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.fireA_005_fire_0.geometry}
                      material={materials.fire}
                    />
                  </group>
                  <group
                    name="fireB_048"
                    position={[-0.007, 0, 0]}
                    scale={[0.419, 0.419, 0.422]}
                  >
                    <mesh
                      name="fireB_048_fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.fireB_048_fire_0.geometry}
                      material={materials.fire}
                    />
                  </group>
                  <group
                    name="fireB_047"
                    position={[0.081, -0.079, 0.032]}
                    rotation={[0.014, -0.052, 0.619]}
                    scale={[0.394, 0.394, 0.213]}
                  >
                    <mesh
                      name="fireB_047_fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.fireB_047_fire_0.geometry}
                      material={materials.fire}
                    />
                  </group>
                  <group
                    name="fireB_046"
                    position={[0.024, -0.087, 0.034]}
                    rotation={[0, 0, -1.638]}
                    scale={[0.339, 0.339, 0.153]}
                  >
                    <mesh
                      name="fireB_046_fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.fireB_046_fire_0.geometry}
                      material={materials.fire}
                    />
                  </group>
                  <group
                    name="fireB_045"
                    position={[0.005, -0.088, 0.232]}
                    rotation={[0, 0, 0.087]}
                    scale={[0.846, 0.846, 0.356]}
                  >
                    <mesh
                      name="fireB_045_fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.fireB_045_fire_0.geometry}
                      material={materials.fire}
                    />
                  </group>
                  <group
                    name="fireB_044"
                    position={[0.091, 0.018, 0.155]}
                    rotation={[0, 0, -0.295]}
                    scale={[0.621, 0.55, 0.755]}
                  >
                    <mesh
                      name="fireB_044_fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.fireB_044_fire_0.geometry}
                      material={materials.fire}
                    />
                  </group>
                  <group
                    name="fireB_043"
                    position={[0.081, -0.071, 0.045]}
                    rotation={[-0.046, -0.076, 0.672]}
                    scale={[0.696, 0.695, 0.733]}
                  >
                    <mesh
                      name="fireB_043_fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.fireB_043_fire_0.geometry}
                      material={materials.fire}
                    />
                  </group>
                  <group
                    name="smoke_087"
                    position={[0.017, -0.085, 0.735]}
                    rotation={[0.232, -0.591, -0.034]}
                    scale={[0.294, 0.283, 0.294]}
                  >
                    <mesh
                      name="smoke_087_fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.smoke_087_fire_0.geometry}
                      material={materials.fire}
                    />
                  </group>
                  <group
                    name="smoke_086"
                    position={[-0.038, -0.082, 1.763]}
                    rotation={[1.413, 0.981, -1.387]}
                    scale={[0.326, 0.455, 0.455]}
                  >
                    <mesh
                      name="smoke_086_fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.smoke_086_fire_0.geometry}
                      material={materials.fire}
                    />
                  </group>
                  <group
                    name="smoke_085"
                    position={[-0.014, 0.079, 0.96]}
                    rotation={[1.009, 0.156, 0.514]}
                    scale={[0.683, 0.405, 0.697]}
                  >
                    <mesh
                      name="smoke_085_fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.smoke_085_fire_0.geometry}
                      material={materials.fire}
                    />
                  </group>
                  <group
                    name="smoke_084"
                    position={[0.009, -0.037, 1.071]}
                    rotation={[0.246, 0.514, 1.049]}
                    scale={[0.328, 0.498, 0.498]}
                  >
                    <mesh
                      name="smoke_084_fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.smoke_084_fire_0.geometry}
                      material={materials.fire}
                    />
                  </group>
                  <group
                    name="fireB_042"
                    position={[0.033, -0.028, 0.008]}
                    rotation={[0, 0, 1.212]}
                    scale={[0.847, 0.847, 0.481]}
                  >
                    <mesh
                      name="fireB_042_fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.fireB_042_fire_0.geometry}
                      material={materials.fire}
                    />
                  </group>
                  <group
                    name="smoke_083"
                    position={[0.15, 0.217, 0.638]}
                    rotation={[0.615, -0.098, 1.014]}
                    scale={[0.29, 0.289, 0.29]}
                  >
                    <mesh
                      name="smoke_083_fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.smoke_083_fire_0.geometry}
                      material={materials.fire}
                    />
                  </group>
                  <group
                    name="fireB_041"
                    position={[0.109, -0.084, 0.034]}
                    rotation={[0, 0, -1.437]}
                    scale={[0.339, 0.339, 0.153]}
                  >
                    <mesh
                      name="fireB_041_fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.fireB_041_fire_0.geometry}
                      material={materials.fire}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/fire.glb");
