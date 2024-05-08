import { useGLTF, useTexture } from "@react-three/drei";
import { xsNodesType } from "../../types";
import { textureSrc } from "../../utils/utils";
import HilightMesh from "../common/HilightMesh";
import { hilightGlasses } from "../../data";

const XSmallModels = () => {
  const { nodes } = useGLTF("./models/xs.glb") as unknown as xsNodesType;
  const xs1Tex = useTexture({
    map: textureSrc("XS1", "BaseColor"),
  });
  const xs2Tex = useTexture({
    map: textureSrc("XS2", "BaseColor"),
  });
  const xs3Tex = useTexture({
    map: textureSrc("XS3", "BaseColor"),
    roughnessMap: textureSrc("XS3", "Roughness"),
    metalnessMap: textureSrc("XS3", "Metallic"),
  });
  xs1Tex.map.flipY = false;
  xs2Tex.map.flipY = false;
  xs3Tex.map.flipY = false;
  xs3Tex.roughnessMap.flipY = false;
  xs3Tex.metalnessMap.flipY = false;

  return (
    <group dispose={null}>
      <mesh geometry={nodes.characters.geometry} position={[12.584, 0.917, 2.342]}>
        <meshStandardMaterial {...xs1Tex} envMapIntensity={1.5} metalness={0.2} roughness={0.3} />
      </mesh>
      <mesh geometry={nodes.character_n.geometry} position={[1.599, 0.977, -0.623]}>
        <meshStandardMaterial {...xs1Tex} envMapIntensity={1.5} metalness={0.2} roughness={0.3} />
      </mesh>
      <mesh geometry={nodes.xs2.geometry} position={[0.268, 0.68, 0.157]}>
        <meshStandardMaterial {...xs2Tex} metalness={0.2} roughness={0.3} />
      </mesh>
      <mesh geometry={nodes.iphone.geometry} position={[-0.89, 0.47, 3.28]}>
        <meshStandardMaterial {...xs3Tex} metalness={1} />
      </mesh>
      <mesh geometry={nodes.xs3.geometry} position={[3.797, 0.803, -2.5]}>
        <meshStandardMaterial {...xs3Tex} metalness={0.7} envMapIntensity={1.2} />
      </mesh>

      <HilightMesh
        hilightInfo={hilightGlasses}
        geometry={nodes.glasses.geometry}
        materialOptions={{
          ...xs1Tex,
        }}
      />
    </group>
  );
};

export default XSmallModels;
useGLTF.preload("./models/xs.glb");
