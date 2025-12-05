
"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Wizard = React.memo(function Wizard(props) {
  // Use React.memo for performance optimization

  const { nodes, materials } = useGLTF('models15/19.glb')


  useFrame((state) => {
    modelRef.current.rotation.y =
      -0.2 + Math.sin(state.clock.elapsedTime) * 0.2;
  });

  const modelRef = useRef();
  return (
          <group ref={modelRef}>
  
<group {...props} dispose={null}>



<group rotation={[Math.PI / 2, 0, 1.6]}>
        <group scale={54.411}>
          <group rotation={[-Math.PI / 2, 0.9, 0]}>
            <group rotation={[Math.PI / 2, 0, 0.4]} scale={0.01}>

<group rotation={[Math.PI, 0, 0]} scale={110.41}>
                
                
                
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Bench_BenchConcreteBase_0.geometry}
                  material={materials.BenchConcreteBase}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Bench_BenchWood_0.geometry}
                  material={materials.BenchWood}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={[50, 22.5, 50]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CeillingWire_CeillingWire_0.geometry}
                  material={materials.CeillingWire}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CeillingWire_CeillingWire_0001.geometry}
                  material={materials.CeillingWire}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CeillingWire_CeillingWire_0002.geometry}
                  material={materials.CeillingWire}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CeillingWire_CeillingWire_0003.geometry}
                  material={materials.CeillingWire}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CeillingWire_CeillingWire_0004.geometry}
                  material={materials.CeillingWire}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CeillingWire_CeillingWire_0005.geometry}
                  material={materials.CeillingWire}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CeillingWire_CeillingWire_0006.geometry}
                  material={materials.CeillingWire}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Lamp_Emissive_0.geometry}
                  material={materials.Emissive}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Lamp_Lamp_0.geometry}
                  material={materials.Lamp}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={[50, 22.5, 50]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.LampBase_CeillingWire_0.geometry}
                  material={materials.CeillingWire}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.LampBase_Emissive_0.geometry}
                  material={materials.Emissive}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.PaitingsInside_001_Painting_0.geometry}
                material={materials.Painting}
                rotation={[-Math.PI / 2, 0.099, 0]}
                scale={100}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.PaitingsOutside_Painting_0.geometry}
                material={materials.Painting}
                rotation={[-Math.PI / 2, 0.099, 0]}
                scale={100}
              />
              <group rotation={[-Math.PI / 2, 0, 0]} scale={[50, 22.5, 50]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Walls_Ceilling_0.geometry}
                  material={materials.Ceilling}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Walls_Emissive_0.geometry}
                  material={materials.Emissive}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Walls_Floor_0.geometry}
                  material={materials.Floor}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Walls_Walls_0.geometry}
                  material={materials.Walls}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_2101bf2d-0583-4fc7-b9e4-0383f26d2d32001'].geometry}
        material={materials['tripo_material_2101bf2d-0583-4fc7-b9e4-0383f26d2d32.001']}
        position={[-0.586, 0.977, -0.699]}
        rotation={[Math.PI, -1.452, Math.PI]}
        scale={[4.692, 2.192, 2.061]}
      />
      <group rotation={[Math.PI / 1.8, 0, 2.8]}>
        <group scale={1.411}>
          <group rotation={[-Math.PI / 2., 0, 0]}>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
              <group rotation={[Math.PI, 0, 0]} scale={110.41}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Bench_BenchConcreteBase_0001.geometry}
                  material={materials['BenchConcreteBase.001']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Bench_BenchWood_0001.geometry}
                  material={materials['BenchWood.001']}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={[50, 22.5, 50]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CeillingWire_CeillingWire_0007.geometry}
                  material={materials['CeillingWire.001']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CeillingWire_CeillingWire_0008.geometry}
                  material={materials['CeillingWire.001']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CeillingWire_CeillingWire_0009.geometry}
                  material={materials['CeillingWire.001']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CeillingWire_CeillingWire_0010.geometry}
                  material={materials['CeillingWire.001']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CeillingWire_CeillingWire_0011.geometry}
                  material={materials['CeillingWire.001']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CeillingWire_CeillingWire_0012.geometry}
                  material={materials['CeillingWire.001']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CeillingWire_CeillingWire_0013.geometry}
                  material={materials['CeillingWire.001']}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Lamp_Emissive_0001.geometry}
                  material={materials['Emissive.001']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Lamp_Lamp_0001.geometry}
                  material={materials['Lamp.001']}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={[50, 22.5, 50]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.LampBase_CeillingWire_0001.geometry}
                  material={materials['CeillingWire.001']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.LampBase_Emissive_0001.geometry}
                  material={materials['Emissive.001']}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.PaitingsInside_001_Painting_0001.geometry}
                material={materials['Painting.001']}
                rotation={[-Math.PI / 2, 0.099, 0]}
                scale={100}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.PaitingsOutside_Painting_0001.geometry}
                material={materials['Painting.001']}
                rotation={[-Math.PI / 2, 0.099, 0]}
                scale={100}
              />
              <group rotation={[-Math.PI / 2, 0, 0]} scale={[50, 22.5, 50]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Walls_Ceilling_0001.geometry}
                  material={materials['Ceilling.001']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Walls_Emissive_0001.geometry}
                  material={materials['Emissive.001']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Walls_Floor_0001.geometry}
                  material={materials['Floor.001']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Walls_Walls_0001.geometry}
                  material={materials['Walls.001']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_d5d7a45d-0f3d-443e-a721-a52008c88198001'].geometry}
        material={materials['tripo_mat_d5d7a45d-0f3d-443e-a721-a52008c88198.001']}
        position={[5.0, 1.6, -1.70]}
        rotation={[0.1,  -2.612, 0]}
        scale={[7.911, 9.93, 4.732]}
      />
    </group> </group> 

      

)})
  

export default Wizard;
useGLTF.preload("/models15/19.glb");
