import { BufferGeometry, MeshStandardMaterial, NormalBufferAttributes } from "three";
import { Outlines, Sparkles } from "@react-three/drei";
import { HilightMeshType } from "../../types";
import { useModalActions } from "../../stores/ModalStore";
import { useMemberActions } from "../../stores/MemberStore";

const MobileMesh = ({
  geometry,
  hilightInfo,
  materialOptions,
}: {
  geometry: BufferGeometry<NormalBufferAttributes>;
  hilightInfo: HilightMeshType;
  materialOptions: Partial<MeshStandardMaterial>;
}) => {
  const handleOpenMemberIntroModal = useModalActions("handleOpenMemberIntroModal");
  const handleCurrentMember = useMemberActions("handleCurrentMember");

  return (
    <group position={hilightInfo.position}>
      <Sparkles
        count={30}
        speed={0.4}
        size={hilightInfo.sparkleSize}
        scale={hilightInfo.sparkleScale}
      />
      <mesh
        receiveShadow
        castShadow
        onClick={(e) => {
          e.stopPropagation();
          handleOpenMemberIntroModal(true);
          handleCurrentMember(hilightInfo.key);
        }}
        geometry={geometry}
      >
        <meshStandardMaterial {...materialOptions} />
        <Outlines
          screenspace
          opacity={0.5}
          thickness={4}
          toneMapped={false}
          color="white"
          angle={Math.PI}
          transparent
        />
      </mesh>
    </group>
  );
};

export default MobileMesh;
