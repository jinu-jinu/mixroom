import { useGLTF, useTexture } from "@react-three/drei";
import { xlNodesType } from "../../types";
import { colors, textureSrc } from "../../utils/utils";

const XLarge = () => {
  const { nodes } = useGLTF("./models/xl.glb") as unknown as xlNodesType;
  const xlTex = useTexture({
    map: textureSrc("XL", "BaseColor"),
    metalnessMap: textureSrc("XL", "Metallic"),
    roughnessMap: textureSrc("XL", "Roughness"),
  });
  xlTex.map.flipY = false;
  xlTex.metalnessMap.flipY = false;
  xlTex.roughnessMap.flipY = false;

  return (
    <group dispose={null}>
      <mesh geometry={nodes.xl.geometry} position={[1.576, 1.842, 1.454]}>
        <meshStandardMaterial {...xlTex} metalness={0.8} envMapIntensity={1.1} />
      </mesh>
      <mesh geometry={nodes.xl_emission.geometry} position={[4.002, 2.1, -4.443]}>
        <meshStandardMaterial
          {...xlTex}
          emissive={colors.orange}
          emissiveIntensity={1.2}
          envMapIntensity={1.2}
        />
      </mesh>
    </group>
  );
};

export default XLarge;
useGLTF.preload("./models/xl.glb");
