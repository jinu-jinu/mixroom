import { BufferGeometry, MeshStandardMaterial, NormalBufferAttributes } from "three";
import { Outlines } from "@react-three/drei";
import { ContentKey } from "../../types";
import { useContentActions } from "../../stores/ContentStore";
import { useIsOpenModal, useModalActions } from "../../stores/ModalStore";

const MobileMesh = ({
  contentKey,
  geometry,
  position,
  children,
  materialOptions,
}: {
  contentKey: ContentKey;
  geometry: BufferGeometry<NormalBufferAttributes>;
  position: [number, number, number];
  children: JSX.Element;
  materialOptions: Partial<MeshStandardMaterial>;
}) => {
  const isOpenModal = useIsOpenModal();
  const handleOpenMemberIntroModal = useModalActions("handleOpenMemberIntroModal") as (
    v: boolean
  ) => void;
  const handleCurrentContent = useContentActions("handleCurrentContent");

  return (
    <group position={position}>
      {isOpenModal ? null : { ...children }}
      <mesh
        receiveShadow
        castShadow
        onClick={(e) => {
          e.stopPropagation();

          handleCurrentContent(contentKey);
          handleOpenMemberIntroModal(true);
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
