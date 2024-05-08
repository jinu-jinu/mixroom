import { motion } from "framer-motion";
import { useModalActions } from "../stores/ModalStore";
import { useCurrentMember } from "../stores/MemberStore";

const MemberIntroModal = () => {
  const handleOpenMemberIntroModal = useModalActions("handleOpenMemberIntroModal");
  const currentMember = useCurrentMember();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        const target = (e.target as HTMLElement).dataset.modal;
        if (!target || target === "inner") return;
        handleOpenMemberIntroModal(false);
      }}
      data-modal="outer"
      className="fixed z-10 top-0 left-0 w-full font-Prompt h-[100dvh] backdrop-blur bg-[rgba(0,0,0,.6)]"
    >
      <motion.div
        data-modal="inner"
        className="absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[40vmax] lg:w-[30vmax] h-[50vh] rounded-3xl bg-[#fefefe] flex flex-col items-center p-4"
      >
        <div className="font-black text-[3vmax] flex-[0.3] flex items-center">
          {currentMember?.title.toUpperCase()}
        </div>
        <p className="flex-[0.7] w-full text-[14px] lg:text-[16px] tracking-tighter flex flex-col justify-center p-4">
          item information.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default MemberIntroModal;
