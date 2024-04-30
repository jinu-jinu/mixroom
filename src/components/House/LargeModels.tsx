import { useGLTF, useTexture } from "@react-three/drei";
import { lNodesType } from "../../types";
import { textureSrc } from "../../utils/utils";
import HilightMesh from "../common/HilightMesh";
import { mirrorAnnotation } from "../../data";

const LargeModels = () => {
  const { nodes } = useGLTF("./models/l.glb") as unknown as lNodesType;
  const l1Tex = useTexture({
    map: textureSrc("L1", "BaseColor"),
    metalnessMap: textureSrc("L1", "Metallic"),
    roughnessMap: textureSrc("L1", "Roughness"),
  });
  const l2Tex = useTexture({
    map: textureSrc("L2", "BaseColor"),
    roughnessMap: textureSrc("L2", "Roughness"),
  });
  const l3Texture = useTexture({
    map: textureSrc("L3", "BaseColor"),
    metalnessMap: textureSrc("L3", "Metallic"),
    roughnessMap: textureSrc("L3", "Roughness"),
  });
  l1Tex.map.flipY = false;
  l1Tex.metalnessMap.flipY = false;
  l1Tex.roughnessMap.flipY = false;
  l2Tex.map.flipY = false;
  l2Tex.roughnessMap.flipY = false;
  l3Texture.map.flipY = false;
  l3Texture.metalnessMap.flipY = false;
  l3Texture.roughnessMap.flipY = false;

  return (
    <group dispose={null}>
      <mesh geometry={nodes.l1.geometry} position={[3.268, 0.997, -0.622]}>
        <meshStandardMaterial {...l1Tex} metalness={0.8} />
      </mesh>
      <mesh geometry={nodes.l2.geometry} position={[5.155, 0.797, 4.344]}>
        <meshStandardMaterial {...l2Tex} />
      </mesh>
      <mesh geometry={nodes.l2_fireplace.geometry} position={[0.285, 0.6, 0]}>
        <meshStandardMaterial {...l2Tex} />
      </mesh>
      <mesh geometry={nodes.l3_yds.geometry} position={[9.946, 2.774, 6.001]}>
        <meshStandardMaterial {...l3Texture} envMapIntensity={1.5} />
      </mesh>
      <mesh geometry={nodes.l3.geometry} position={[8.456, 1.199, 4.729]}>
        <meshStandardMaterial {...l3Texture} metalness={0.7} />
      </mesh>
      <HilightMesh
        contentKey="kyujin"
        position={[7.886, 0.998, -2.027]}
        geometry={nodes.l3_mirror.geometry}
        annotation={mirrorAnnotation}
        materialOptions={{ ...l3Texture, metalness: 0.8, envMapIntensity: 0.8 }}
      />
    </group>
  );
};

export default LargeModels;
useGLTF.preload("./models/l.glb");
