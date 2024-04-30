import { motion } from "framer-motion";
import { useIsAssetDownloaded } from "../../stores/LoadingStore";
import { opacityBlurVariants } from "../../utils/variants";

const Loading1 = () => {
  const isAssetDownloaded = useIsAssetDownloaded();

  return (
    <motion.div
      transition={{ ease: "easeOut", type: "tween" }}
      variants={opacityBlurVariants}
      initial="animate"
      animate={isAssetDownloaded ? "initial" : "animate"}
      className="text-[6vmax] font-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
    >
      LOADING
    </motion.div>
  );
};

export default Loading1;
