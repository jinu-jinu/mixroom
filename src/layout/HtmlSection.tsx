import { AnimatePresence } from "framer-motion";
import UserInterface from "./UserInterface";
import Loading from "../components/Loading";
import MainModal from "./MainModal";
import { useIsLoading } from "../stores/LoadingStore";
import { useIsOpenMainModal, useIsOpenMemberIntroModal } from "../stores/ModalStore";
import MemberIntroModal from "./MemberIntroModal";

const HtmlSection = () => {
  const isLoading = useIsLoading();
  const isOpenMainModal = useIsOpenMainModal();
  const isOpenMemberIntroModal = useIsOpenMemberIntroModal();

  return (
    <>
      <UserInterface />

      <AnimatePresence>
        {isLoading ? <Loading key="loading" /> : null}
        {isOpenMainModal ? <MainModal key="mainModal" /> : null}
        {isOpenMemberIntroModal && <MemberIntroModal key="memberIntroModal" />}
      </AnimatePresence>
    </>
  );
};

export default HtmlSection;
