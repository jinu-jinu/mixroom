import { BufferGeometry, MeshStandardMaterial, NormalBufferAttributes } from "three";
import { AnnotationType, ContentKey } from "../../types";
import MobileMesh from "./MobileMesh";
import DesktopMesh from "./DesktopMesh";
import Annotation from "./Annotation";
import { useIsMobile } from "../../stores/DeviceStore";

const HilightMesh = ({
  contentKey,
  position,
  geometry,
  annotation,
  materialOptions,
}: {
  contentKey: ContentKey;
  position: [number, number, number];
  geometry: BufferGeometry<NormalBufferAttributes>;
  annotation: AnnotationType;
  materialOptions: Partial<MeshStandardMaterial>;
}) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <MobileMesh
      contentKey={contentKey}
      position={position}
      geometry={geometry}
      materialOptions={materialOptions}
    >
      {annotation && <Annotation {...annotation} />}
    </MobileMesh>
  ) : (
    <DesktopMesh
      contentKey={contentKey}
      position={position}
      geometry={geometry}
      materialOptions={materialOptions}
    >
      {annotation && <Annotation {...annotation} />}
    </DesktopMesh>
  );
};

export default HilightMesh;
