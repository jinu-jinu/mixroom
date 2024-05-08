import { useIsAssetDownloaded, useLoadingActions } from "../../stores/LoadingStore";
import { opacityBlurVariants } from "../../utils/variants";
import { motion } from "framer-motion";

const Loading2 = () => {
  const isAssetDownloaded = useIsAssetDownloaded();
  const handleLoading = useLoadingActions("handleLoading");

  return (
    <div className="flex flex-col items-center leading-[5.5vmax] font-black w-full text-sd-gray">
      <motion.div
        transition={{ type: "tween", ease: "easeIn", delay: 0.2 }}
        variants={opacityBlurVariants}
        initial="initial"
        animate={isAssetDownloaded ? "animate" : "initial"}
        className="flex mr-[6vmax] text-[6vmax]"
      >
        <div>M</div>
        <div>I</div>
        <div>X</div>
        <div>X</div>
      </motion.div>

      <motion.div
        transition={{ delay: 0.4, type: "tween", ease: "easeIn" }}
        variants={opacityBlurVariants}
        initial="initial"
        animate={isAssetDownloaded ? "animate" : "initial"}
        onAnimationComplete={() => {
          handleLoading(false);
        }}
        className="flex ml-[6vmax] text-[6vmax]"
      >
        <div>R</div>
        <div>O</div>
        <div>O</div>
        <div>M</div>
      </motion.div>
    </div>
  );
};

export default Loading2;
