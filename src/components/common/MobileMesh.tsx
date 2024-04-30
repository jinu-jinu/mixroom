import { BufferGeometry, MeshStandardMaterial, NormalBufferAttributes } from "three";
import { Outlines } from "@react-three/drei";
import { ContentKey } from "../../types";
import { useContentActions } from "../../stores/ContentStore";
import {
  useIsOpenMainModal,
  useIsOpenMemberIntroModal,
  useModalActions,
} from "../../stores/ModalStore";

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
  const isOpenMainModal = useIsOpenMainModal();
  const isOpenMemberIntroModal = useIsOpenMemberIntroModal();
  const handleOpenMemberIntroModal = useModalActions("handleOpenMemberIntroModal") as (
    v: boolean
  ) => void;
  const handleCurrentContent = useContentActions("handleCurrentContent");

  return (
    <mesh
      receiveShadow
      castShadow
      onClick={(e) => {
        e.stopPropagation();

        handleCurrentContent(contentKey);
        handleOpenMemberIntroModal(true);
      }}
      geometry={geometry}
      position={position}
    >
      <meshStandardMaterial {...materialOptions} />
      {isOpenMainModal || isOpenMemberIntroModal ? null : { ...children }}
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
  );
};

export default MobileMesh;
