import { create } from "zustand";

const useGlobalStore = create((set) => ({
  sidebar: false,
  onSide: (value: any) => set((state: any) => ({ sidebar: value })),
}));

export default useGlobalStore;
