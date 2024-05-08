import { useGLTF, useTexture } from "@react-three/drei";
import { mNodesType } from "../../types";
import { colors, textureSrc } from "../../utils/utils";
import HilightMesh from "../common/HilightMesh";
import { cakeAnnotation, canvasAnnotation, hyperlinks } from "../../data";
import HrefMesh from "../common/HrefMesh";

const MediumModels = () => {
  const { nodes } = useGLTF("./models/m.glb") as unknown as mNodesType;
  const m1Tex = useTexture({
    map: textureSrc("M1", "BaseColor"),
    roughnessMap: textureSrc("M1", "Roughness"),
  });
  const m2Tex = useTexture({
    map: textureSrc("M2", "BaseColor"),
    metalnessMap: textureSrc("M2", "Metallic"),
    roughnessMap: textureSrc("M2", "Roughness"),
    emissiveMap: textureSrc("M2", "Emissive"),
  });
  const m3Tex = useTexture({
    map: textureSrc("M3", "BaseColor"),
    roughnessMap: textureSrc("M3", "Roughness"),
  });
  const m4Tex = useTexture({
    map: textureSrc("M4", "BaseColor"),
    metalnessMap: textureSrc("M4", "Metallic"),
    roughnessMap: textureSrc("M4", "Roughness"),
    emissiveMap: textureSrc("M4", "Emissive"),
  });
  m1Tex.map.flipY = false;
  m1Tex.roughnessMap.flipY = false;
  m2Tex.map.flipY = false;
  m2Tex.metalnessMap.flipY = false;
  m2Tex.roughnessMap.flipY = false;
  m2Tex.emissiveMap.flipY = false;
  m3Tex.map.flipY = false;
  m3Tex.roughnessMap.flipY = false;
  m4Tex.map.flipY = false;
  m4Tex.metalnessMap.flipY = false;
  m4Tex.roughnessMap.flipY = false;
  m4Tex.emissiveMap.flipY = false;

  return (
    <group dispose={null}>
      <mesh geometry={nodes.m1.geometry} position={[3.351, 0.493, -2.745]}>
        <meshStandardMaterial {...m1Tex} envMapIntensity={1.2} />
      </mesh>
      <mesh geometry={nodes.m2.geometry} position={[-0.909, 0.238, 3.185]}>
        <meshStandardMaterial
          {...m2Tex}
          metalness={1}
          emissive={colors.white}
          emissiveIntensity={4}
          envMapIntensity={1.3}
        />
      </mesh>
      <mesh geometry={nodes.m3.geometry} position={[4.47, 1.405, 7.529]}>
        <meshStandardMaterial {...m3Tex} envMapIntensity={1.6} />
      </mesh>
      <mesh geometry={nodes.m4.geometry} position={[-2.303, 0.513, 6.194]}>
        <meshStandardMaterial
          {...m4Tex}
          emissive={colors.blue}
          emissiveIntensity={1.5}
          envMapIntensity={1.6}
          metalness={0.8}
        />
      </mesh>

      <HrefMesh
        geometry={nodes.fan_site.geometry}
        position={[12.978, 1.714, 2.5]}
        src={hyperlinks.fan_site}
        materialOptions={{ ...m4Tex, envMapIntensity: 2 }}
      />
      <HrefMesh
        geometry={nodes.once_haewon.geometry}
        position={[12.978, 1.714, 2.5]}
        src={hyperlinks.once_haewon}
        materialOptions={{ ...m4Tex, envMapIntensity: 2 }}
      />
      <HrefMesh
        geometry={nodes.jiwoohae.geometry}
        position={[12.978, 1.714, 2.5]}
        src={hyperlinks.jiwoohae}
        materialOptions={{ ...m4Tex, envMapIntensity: 2 }}
      />

      <HilightMesh
        contentKey="jiwoo"
        annotation={cakeAnnotation}
        geometry={nodes.cake.geometry}
        position={[4.201, 0.908, -2.143]}
        materialOptions={{ ...m4Tex }}
      />
      <HilightMesh
        contentKey="bae"
        annotation={canvasAnnotation}
        geometry={nodes.canvas.geometry}
        position={[8.993, 0.543, 0.9]}
        materialOptions={{
          ...m2Tex,
          emissive: colors.yellow,
          emissiveIntensity: 10,
          envMapIntensity: 1.7,
        }}
      />
    </group>
  );
};

export default MediumModels;
useGLTF.preload("./models/m.glb");
