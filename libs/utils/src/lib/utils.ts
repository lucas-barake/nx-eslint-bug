import { create } from 'zustand';

type ZustandStore = {
  someValue: string;
}
export const useZustandStore = create<ZustandStore>(() => ({
  someValue: 'Hello, Zustand!',
}));
