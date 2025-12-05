
"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Wizard = React.memo(function Wizard(props) {
  // Use React.memo for performance optimization

  const { nodes, materials } = useGLTF('models15/19.glb')


  const modelRef = useRef();

  useFrame((state) => {
    modelRef.current.rotation.y =
   -0.35 + Math.sin(state.clock.elapsedTime) * 0.23;
  });


  return (

          <group ref={modelRef}>

    <group {...props} dispose={null}>
  

                
      <group position={[Math.PI / -1.4, -1.8, -0.002]}>
        <group scale={0.099}>
          <group rotation={[-Math.PI / 0.40, 0.60, 0.10]}>
            <group rotation={[Math.PI / -1.7, 2.72, 0.6]} scale={0.0022}>
              <group rotation={[Math.PI, 0, 0]} scale={110.41}>
               





      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bench_BenchConcreteBase_0.geometry}
        material={materials.BenchConcreteBase}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={60.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bench_BenchWood_0.geometry}
        material={materials.BenchWood}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={60.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CeillingWire_CeillingWire_0.geometry}
        material={materials.CeillingWire}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CeillingWire_CeillingWire_0001.geometry}
        material={materials.CeillingWire}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CeillingWire_CeillingWire_0002.geometry}
        material={materials.CeillingWire}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CeillingWire_CeillingWire_0003.geometry}
        material={materials.CeillingWire}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CeillingWire_CeillingWire_0004.geometry}
        material={materials.CeillingWire}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CeillingWire_CeillingWire_0005.geometry}
        material={materials.CeillingWire}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CeillingWire_CeillingWire_0006.geometry}
        material={materials.CeillingWire}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamp_Emissive_0.geometry}
        material={materials.Emissive}
        scale={54.411}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamp_Lamp_0.geometry}
        material={materials.Lamp}
        scale={54.411}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LampBase_CeillingWire_0.geometry}
        material={materials.CeillingWire}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LampBase_Emissive_0.geometry}
        material={materials.Emissive}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PaitingsInside_001_Painting_0.geometry}
        material={materials.Painting}
        rotation={[0, 0.099, 0]}
        scale={54.411}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PaitingsOutside_Painting_0.geometry}
        material={materials.Painting}
        rotation={[0, 0.099, 0]}
        scale={54.411}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls_Ceilling_0.geometry}
        material={materials.Ceilling}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls_Emissive_0.geometry}
        material={materials.Emissive}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls_Floor_0.geometry}
        material={materials.Floor}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls_Walls_0.geometry}
        material={materials.Walls}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_d5d7a45d-0f3d-443e-a721-a52008c88198'].geometry}
        material={materials['tripo_mat_d5d7a45d-0f3d-443e-a721-a52008c88198']}
        position={[-243.812, 123.317, 22.795]}
        rotation={[-0.005, -0.036, 0]}
        scale={[169.511, 285.253, 259.532]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Korpus_low_BlackMetall_001_0.geometry}
        material={materials.BlackMetall_001}
        position={[37.151, 214.064, -24.698]}
        rotation={[-Math.PI / 2, 0, 0.002]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Korpus_low_DarkBlestyshka_001_0.geometry}
        material={materials.DarkBlestyshka_001}
        position={[37.151, 214.064, -24.698]}
        rotation={[-Math.PI / 2, 0, 0.002]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Korpus_low_Fara_0.geometry}
        material={materials.Fara}
        position={[37.151, 214.064, -24.698]}
        rotation={[-Math.PI / 2, 0, 0.002]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Korpus_low_Glass_0.geometry}
        material={materials.Glass}
        position={[37.151, 214.064, -24.698]}
        rotation={[-Math.PI / 2, 0, 0.002]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Korpus_low_GrenEmissive_0.geometry}
        material={materials.GrenEmissive}
        position={[37.151, 214.064, -24.698]}
        rotation={[-Math.PI / 2, 0, 0.002]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Korpus_low_GunMetal_0.geometry}
        material={materials.GunMetal}
        position={[37.151, 214.064, -24.698]}
        rotation={[-Math.PI / 2, 0, 0.002]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Korpus_low_Kamuflage_001_0.geometry}
        material={materials.Kamuflage_001}
        position={[37.151, 214.064, -24.698]}
        rotation={[-Math.PI / 2, 0, 0.002]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Korpus_low_LightBlestyashka_001_0.geometry}
        material={materials.LightBlestyashka_001}
        position={[37.151, 214.064, -24.698]}
        rotation={[-Math.PI / 2, 0, 0.002]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Korpus_low_RedEmissive_0.geometry}
        material={materials.RedEmissive}
        position={[37.151, 214.064, -24.698]}
        rotation={[-Math.PI / 2, 0, 0.002]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Korpus_low_Remni_0.geometry}
        material={materials.Remni}
        position={[37.151, 214.064, -24.698]}
        rotation={[-Math.PI / 2, 0, 0.002]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Korpus_low_RoketMetalR_0.geometry}
        material={materials.RoketMetalR}
        position={[37.151, 214.064, -24.698]}
        rotation={[-Math.PI / 2, 0, 0.002]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Korpus_low_RoketMetalW_001_0.geometry}
        material={materials.RoketMetalW_001}
        position={[37.151, 214.064, -24.698]}
        rotation={[-Math.PI / 2, 0, 0.002]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Korpus_low_Rubber_001_0.geometry}
        material={materials.Rubber_001}
        position={[37.151, 214.064, -24.698]}
        rotation={[-Math.PI / 2, 0, 0.002]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Korpus_low_SolidKamuflage_001_0.geometry}
        material={materials.SolidKamuflage_001}
        position={[37.151, 214.064, -24.698]}
        rotation={[-Math.PI / 2, 0, 0.002]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Korpus_low_Yashik_0.geometry}
        material={materials.Yashik}
        position={[37.151, 214.064, -24.698]}
        rotation={[-Math.PI / 2, 0, 0.002]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zadnica_low_BlackMetall_0.geometry}
        material={materials.BlackMetall}
        position={[34.626, 163.066, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zadnica_low_DarkBlestyshka_0.geometry}
        material={materials.DarkBlestyshka}
        position={[34.626, 163.066, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zadnica_low_Kamuflage_0.geometry}
        material={materials.Kamuflage}
        position={[34.626, 163.066, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zadnica_low_LightBlestyashka_0.geometry}
        material={materials.LightBlestyashka}
        position={[34.626, 163.066, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zadnica_low_RoketMetalW_0.geometry}
        material={materials.RoketMetalW}
        position={[34.626, 163.066, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zadnica_low_Rubber_0.geometry}
        material={materials.Rubber}
        position={[34.626, 163.066, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zadnica_low_SolidKamuflage_0.geometry}
        material={materials.SolidKamuflage}
        position={[34.626, 163.066, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zadnica_low_ZadnieFanari_0.geometry}
        material={materials.ZadnieFanari}
        position={[34.626, 163.066, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
    </group>
</group>    </group>
</group>    </group>
</group>    </group>


  );
})
export default Wizard;
useGLTF.preload("/models15/19.glb");



