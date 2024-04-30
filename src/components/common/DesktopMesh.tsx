import { Outlines, useCursor } from "@react-three/drei";
import { useState } from "react";
import { useContentActions } from "../../stores/ContentStore";
import { ContentKey } from "../../types";
import { BufferGeometry, MeshStandardMaterial, NormalBufferAttributes } from "three";
import { useModalActions } from "../../stores/ModalStore";

const DesktopMesh = ({
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
  const [hovered, setHovered] = useState(false);
  const handleOpenMemberIntroModal = useModalActions("handleOpenMemberIntroModal") as (
    v: boolean
  ) => void;
  const handleCurrentContent = useContentActions("handleCurrentContent");

  useCursor(hovered);

  return (
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
        handleCurrentContent(contentKey);
        handleOpenMemberIntroModal(true);
      }}
      geometry={geometry}
      position={position}
    >
      <meshStandardMaterial {...materialOptions} />
      {hovered && { ...children }}
      <Outlines screenspace opacity={hovered ? 0.5 : 0} thickness={3} color="white" transparent />
    </mesh>
  );
};

export default DesktopMesh;
