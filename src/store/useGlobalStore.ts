import { create } from "zustand";

type User = {
  id: string,
  name: string,
  email: string,
  profile_picture: string,
  role: string
}
interface GlobalState {
  user: User | null;
  setUser: (v: User) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  user: null,
  setUser: (u) => set({ user: u })
}));