import { Html, Sparkles } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { motion } from "framer-motion";
import { AnnotationType } from "../../types";
import { popupVariant } from "../../utils/variants";
import { useIsMobile } from "../../stores/DeviceStore";

const Annotation = ({
  title,
  position,
  rotation,
  factor,
  sparkleScale,
  sparkleSize,
}: AnnotationType) => {
  const { gl } = useThree();
  const isMobile = useIsMobile();

  return (
    <>
      <Html
        position={position}
        rotation={rotation}
        portal={{ current: gl.domElement.parentNode as HTMLElement }}
        transform
        center
        distanceFactor={isMobile ? factor * 0.7 : factor}
      >
        <motion.div
          variants={popupVariant}
          initial="close"
          animate="open"
          className="annotation text-white font-Nanum font-black"
        >
          {title}
        </motion.div>
      </Html>

      <Sparkles count={30} speed={0.4} size={sparkleSize} scale={sparkleScale} />
    </>
  );
};

export default Annotation;
