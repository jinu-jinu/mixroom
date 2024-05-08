import { logo } from "../assets/images";
import { useCurrentModal, useIsOpenModal, useModalActions } from "../stores/ModalStore";

const Nav = () => {
  const currentModal = useCurrentModal();
  const handleOpenMemberIntroModal = useModalActions("handleOpenMemberIntroModal") as (
    v: boolean
  ) => void;
  const handleOpenMainModal = useModalActions("handleOpenMainModal") as (v: boolean) => void;
  const handleOpenModal = useModalActions("handleOpenModal") as (v: boolean) => void;
  const handleCurrentModal = useModalActions("handleCurrentModal") as (
    v: "main" | "memberIntro" | null
  ) => void;
  const isOpenModal = useIsOpenModal();

  const openModalHandler = () => {
    handleOpenMainModal(true);
    handleOpenModal(true);
    handleCurrentModal("main");
  };

  const closeModalHandler = () => {
    if (!handleCurrentModal) return;
    if (currentModal === "main") handleOpenMainModal(false);
    if (currentModal === "memberIntro") handleOpenMemberIntroModal(false);
    handleOpenModal(false);
    handleCurrentModal(null);
  };

  return (
    <div className="fixed z-50 top-0 left-0 w-full h-[120px] flex items-center justify-center">
      <img src={logo} alt="title logo" width={150} />

      {isOpenModal ? (
        <button className="modal-btn" onClick={closeModalHandler}>
          <svg
            width="24px"
            fill="none"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 9L15 15M15 9L9 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      ) : (
        <button className="modal-btn" onClick={openModalHandler}>
          <svg width="24px" height="24px" viewBox="-0.5 0 25 25" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 12.32H22"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 18.32H22"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 6.32001H22"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Nav;
