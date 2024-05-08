import { Outlines, Sparkles, useCursor } from "@react-three/drei";
import { useState } from "react";
import { BufferGeometry, MeshStandardMaterial, NormalBufferAttributes } from "three";
import { useModalActions } from "../../stores/ModalStore";
import { HilightMeshType } from "../../types";
import { useMemberActions } from "../../stores/MemberStore";

const DesktopMesh = ({
  geometry,
  hilightInfo,
  materialOptions,
}: {
  geometry: BufferGeometry<NormalBufferAttributes>;
  hilightInfo: HilightMeshType;
  materialOptions: Partial<MeshStandardMaterial>;
}) => {
  const [hovered, setHovered] = useState(false);
  const handleOpenMemberIntroModal = useModalActions("handleOpenMemberIntroModal");
  const handleCurrentMember = useMemberActions("handleCurrentMember");
  useCursor(hovered);

  return (
    <group position={hilightInfo.position}>
      <Sparkles
        count={30}
        speed={0.4}
        size={hilightInfo.sparkleSize}
        scale={hilightInfo.sparkleScale}
        opacity={hovered ? 1 : 0}
      />
      <mesh
        receiveShadow
        castShadow
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
        }}
        onClick={(e) => {
          e.stopPropagation();
          handleOpenMemberIntroModal(true);
          handleCurrentMember(hilightInfo.key);
        }}
        geometry={geometry}
      >
        <meshStandardMaterial {...materialOptions} />
        <Outlines screenspace opacity={hovered ? 0.5 : 0} thickness={3} color="white" transparent />
      </mesh>
    </group>
  );
};

export default DesktopMesh;
