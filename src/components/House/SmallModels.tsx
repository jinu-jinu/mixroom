import { useGLTF, useTexture } from "@react-three/drei";
import { sNodesType } from "../../types";
import { colors, textureSrc } from "../../utils/utils";
import HilightMesh from "../common/HilightMesh";
import { earAnnotation, hyperlinks, magicAnnotation } from "../../data";
import HrefMesh from "../common/HrefMesh";

const SmallModels = () => {
  const { nodes } = useGLTF("./models/s.glb") as unknown as sNodesType;
  const s1Tex = useTexture({
    map: textureSrc("S1", "BaseColor"),
  });
  const s2Tex = useTexture({
    map: textureSrc("S2", "BaseColor"),
    roughnessMap: textureSrc("S2", "Roughness"),
  });
  const s3Tex = useTexture({
    map: textureSrc("S3", "BaseColor"),
    metalnessMap: textureSrc("S3", "Metallic"),
    roughnessMap: textureSrc("S3", "Roughness"),
    emissiveMap: textureSrc("S3", "Emissive"),
  });
  const s4Tex = useTexture({
    map: textureSrc("S4", "BaseColor"),
    metalnessMap: textureSrc("S4", "Metallic"),
    roughnessMap: textureSrc("S4", "Roughness"),
  });
  s1Tex.map.flipY = false;
  s2Tex.map.flipY = false;
  s2Tex.roughnessMap.flipY = false;
  s3Tex.map.flipY = false;
  s3Tex.metalnessMap.flipY = false;
  s3Tex.roughnessMap.flipY = false;
  s3Tex.emissiveMap.flipY = false;
  s4Tex.map.flipY = false;
  s4Tex.metalnessMap.flipY = false;
  s4Tex.roughnessMap.flipY = false;

  return (
    <group dispose={null}>
      <mesh geometry={nodes.s1.geometry} position={[4.201, 0.99, -2.639]}>
        <meshStandardMaterial {...s1Tex} />
      </mesh>
      <mesh geometry={nodes.s2.geometry} position={[12.657, 0.917, 3.101]}>
        <meshStandardMaterial {...s2Tex} />
      </mesh>
      <mesh geometry={nodes.s3.geometry} position={[2.42, 0.961, -2.657]}>
        <meshStandardMaterial
          {...s3Tex}
          metalness={0.7}
          emissive={colors.white}
          emissiveIntensity={1.2}
        />
      </mesh>
      <mesh geometry={nodes.s4.geometry} position={[5.286, 0.998, -4.03]}>
        <meshStandardMaterial {...s4Tex} metalness={0.5} />
      </mesh>

      <HrefMesh
        geometry={nodes.twitter.geometry}
        position={[-1.5, 2.225, 7.67]}
        src={hyperlinks.twitter}
        materialOptions={{ ...s1Tex }}
      />
      <HrefMesh
        geometry={nodes.instagram.geometry}
        position={[0.496, 2.227, 7.67]}
        src={hyperlinks.instagram}
        materialOptions={{ ...s1Tex, envMapIntensity: 1.5 }}
      />
      <HrefMesh
        geometry={nodes.youtube.geometry}
        position={[1.242, 2.203, 7.669]}
        src={hyperlinks.youtube}
        materialOptions={{ ...s2Tex }}
      />
      <HrefMesh
        geometry={nodes.jyp.geometry}
        position={[1.246, 1.053, 7.67]}
        src={hyperlinks.jyp}
        materialOptions={{ ...s2Tex }}
      />

      <HilightMesh
        contentKey="sullyoon"
        annotation={earAnnotation}
        geometry={nodes.rabbit_ear.geometry}
        position={[9.537, 0.947, 6.017]}
        materialOptions={{ ...s2Tex, envMapIntensity: 1.5 }}
      />
      <HilightMesh
        contentKey="lily"
        annotation={magicAnnotation}
        geometry={nodes.magic_hat.geometry}
        position={[4.467, 1.709, 7.665]}
        materialOptions={{ ...s2Tex, envMapIntensity: 1.6 }}
      />
    </group>
  );
};

export default SmallModels;
useGLTF.preload("./models/s.glb");
