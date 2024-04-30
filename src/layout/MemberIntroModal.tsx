import { motion } from "framer-motion";
import { SlideLeftVariant } from "../utils/variants";
import ContainerSection from "./ContentSection";
import Stripe from "./Stripe";
import { useCurrentContent } from "../stores/ContentStore";

const MemberIntroModal = () => {
  const currentContent = useCurrentContent();

  if (!currentContent) return <div>NOT INFORMATION</div>;

  return (
    <motion.section
      initial="initial"
      animate="animate"
      exit="initial"
      variants={SlideLeftVariant}
      className="absolute top-0 w-full h-auto overflow-x-hidden"
    >
      <div className="w-full h-[100dvh] text-center absolute top-0 left-0 flex flex-col justify-center items-center pointer-events-none">
        <h1 className="font-Prompt font-black text-[6vmax] text-gradient-1 tracking-wide">
          {currentContent.englishTitle}
        </h1>
      </div>

      <section className="bg-black">
        <div className="flex flex-col justify-center items-center">
          <img
            src={currentContent.photoResources[currentContent.imgIdx].resource}
            alt="bg image"
            className="main-img"
            width="100%"
            height="100dvh"
          />

          <Stripe />

          <ContainerSection title="PHOTOS" resources={currentContent.photoResources} type="image" />

          <Stripe />
          <ContainerSection
            title="YOUTUBES"
            resources={currentContent.youtubeResources}
            type="video"
          />

          <Stripe />
          <ContainerSection
            title="SHORTS"
            resources={currentContent.shortsResources}
            type="video"
          />

          <Stripe />
        </div>
      </section>
    </motion.section>
  );
};

export default MemberIntroModal;
