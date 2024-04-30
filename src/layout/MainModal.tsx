import { motion } from "framer-motion";
import { isOdd } from "../utils/utils";
import { useModalActions } from "../stores/ModalStore";
import { useContentActions } from "../stores/ContentStore";
import { ContentKey } from "../types";
import { SlideRightVariant } from "../utils/variants";

const MainModal = () => {
  const handleCurrentModal = useModalActions("handleCurrentModal") as (
    v: "main" | "memberIntro" | null
  ) => void;
  const handleOpenMainModal = useModalActions("handleOpenMainModal") as (v: boolean) => void;
  const handleOpenMemberIntroModal = useModalActions("handleOpenMemberIntroModal") as (
    v: boolean
  ) => void;

  const handleCurrentContent = useContentActions("handleCurrentContent");

  const onClickContent = (contentKey: ContentKey) => {
    handleCurrentContent(contentKey);
    handleOpenMainModal(false);
    handleOpenMemberIntroModal(true);
    handleCurrentModal("memberIntro");
  };

  return (
    <motion.section
      variants={SlideRightVariant}
      initial="initial"
      animate="animate"
      exit="initial"
      className="fixed z-40 top-0 w-full h-[100dvh] bg-black font-Prompt font-black flex justify-center items-center text-center"
    >
      <ul className="text-white text-[40px] leading-[50px] space-y-4 lg:text-[77px] lg:leading-[88px]">
        {["LILY", "HAEWON", "SULLYOON", "BAE", "JIWOO", "KYUJIN"].map((name, i) => {
          return (
            <li
              key={name}
              className={`border-b-[3px] text-sd-gray border-white ${
                isOdd(i) ? "lg:ml-[250px] lg:text-right" : "lg:mr-[250px] lg:text-left"
              } hover:text-blue-500 hover:border-blue-500 hover:scale-110 transition-all cursor-pointer`}
              onClick={() => {
                const contentKey = name.toLowerCase() as ContentKey;
                onClickContent(contentKey);
              }}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </motion.section>
  );
};

export default MainModal;
