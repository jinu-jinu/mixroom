import { create } from "zustand";
import { MemberInfoType, MemberKey, MemberStoreType } from "../types";

const sampleData: Record<MemberKey, MemberInfoType> = {
  lily: {
    title: "lily",
    description: "",
  },
  haewon: {
    title: "haewon",
    description: "",
  },
  sullyoon: {
    title: "sullyoon",
    description: "",
  },
  bae: {
    title: "bae",
    description: "",
  },
  jiwoo: {
    title: "jiwoo",
    description: "",
  },
  kyujin: {
    title: "kyujin",
    description: "",
  },
};

const memberStore = create<MemberStoreType>((set) => ({
  currentMember: null,
  actions: {
    handleCurrentMember: (v) =>
      set(() => {
        const currentMember = sampleData[v];
        return { currentMember };
      }),
  },
}));

const useCurrentMember = () => memberStore((state) => state.currentMember);
const useMemberActions = (name: keyof MemberStoreType["actions"]) =>
  memberStore((state) => state.actions[name]);

export { useCurrentMember, useMemberActions };
