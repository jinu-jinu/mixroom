import { create } from "zustand";
import { ContentStoreType } from "../types";
import { contentList } from "../data";

const contentStore = create<ContentStoreType>((set) => ({
  currentContent: null,
  actions: {
    handleCurrentContent: (v) =>
      set(() => {
        const list = contentList[v];
        return { currentContent: list };
      }),
  },
}));

const useCurrentContent = () => contentStore((state) => state.currentContent);
const useContentActions = (name: keyof ContentStoreType["actions"]) =>
  contentStore((state) => state.actions[name]);

export { useCurrentContent, useContentActions };
