import { create } from "zustand";

const useGlobalStore = create((set) => ({
  sidebar: false,
  onSide: () => set((state: any) => ({ sidebar: !state.sidebar })),
}));

export default useGlobalStore;
