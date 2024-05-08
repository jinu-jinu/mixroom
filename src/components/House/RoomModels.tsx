import { useGLTF, useTexture } from "@react-three/drei";
import { textureSrc } from "../../utils/utils";
import { wallNodesType } from "../../types";

const Room = () => {
  const { nodes } = useGLTF("./models/room.glb") as unknown as wallNodesType;
  const wallTex = useTexture({
    map: textureSrc("WALL", "BaseColor"),
  });
  const ceilTex = useTexture({
    map: textureSrc("CEIL", "BaseColor"),
    roughnessMap: textureSrc("CEIL", "Roughness"),
  });

  wallTex.map.flipY = false;
  ceilTex.map.flipY = false;
  ceilTex.roughnessMap.flipY = false;

  return (
    <group dispose={null}>
      <mesh geometry={nodes.ceil.geometry} position={[4.642, 0.002, 0.936]}>
        <meshStandardMaterial {...ceilTex} envMapIntensity={2} metalness={0.2} />
      </mesh>
      <mesh geometry={nodes.wall.geometry} position={[4.642, 0.002, 0.936]}>
        <meshStandardMaterial {...wallTex} envMapIntensity={1.5} metalness={0.3} roughness={0.6} />
      </mesh>
    </group>
  );
};

export default Room;
useGLTF.preload("/models/room.glb");
