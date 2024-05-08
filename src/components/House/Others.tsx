import { Html, useGLTF, useTexture } from "@react-three/drei";
import { OthersNodesType } from "../../types";
import { colors } from "../../utils/utils";
import { useThree } from "@react-three/fiber";
import { useIsOpenMainModal, useIsOpenMemberIntroModal } from "../../stores/ModalStore";

const Others = () => {
  const { gl } = useThree();
  const isOpenMainModal = useIsOpenMainModal();
  const isOpenMemberIntroModal = useIsOpenMemberIntroModal();

  const { nodes } = useGLTF("./models/others.glb") as unknown as OthersNodesType;
  const [iphoneMap, drawingMap] = useTexture([
    "./textures/others/iphone.avif",
    "./textures/others/drawing.avif",
  ]);
  iphoneMap.flipY = false;
  drawingMap.flipY = false;

  return (
    <group dispose={null}>
      <mesh geometry={nodes.window.geometry} position={[-3.043, 1.849, 0.957]}>
        <meshStandardMaterial color={"#fffbeb"} roughness={0} metalness={0.4} envMapIntensity={2} />
      </mesh>
      <mesh geometry={nodes.drawing.geometry} position={[6.622, 1.7, 7.96]}>
        <meshStandardMaterial map={drawingMap} envMapIntensity={6} />
      </mesh>
      <mesh geometry={nodes.iphone_display.geometry} position={[-0.89, 0.47, 3.28]}>
        <meshStandardMaterial map={iphoneMap} envMapIntensity={2} />
      </mesh>
      <mesh geometry={nodes.mirros.geometry} position={[8.783, 1.381, 2.358]}>
        <meshStandardMaterial
          color={"#fcf1e1"}
          emissive={colors.yellow}
          emissiveIntensity={0.8}
          roughness={0}
          metalness={0.3}
        />
      </mesh>
      <mesh geometry={nodes.tv_display.geometry} position={[0.121, 1.261, 7.67]}>
        {/* 비디오 텍스쳐로 변경 */}
        {/* <Html portal={{ current: gl.domElement.parentNode as HTMLElement }} transform center>
          {isOpenMainModal || isOpenMemberIntroModal ? null : (
            
          )}
        </Html> */}
      </mesh>
    </group>
  );
};

export default Others;
useGLTF.preload("./models/others.glb");
