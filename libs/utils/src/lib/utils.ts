import { create } from 'zustand';

type ZustandStore = {
  someValue: string;
}
export const useZustandStore = create<ZustandStore>(() => ({
  someValue: 'Hello, Zustand!',
}));

export const useAnotherZustandStore = create<ZustandStore>(() => ({
  someValue: 'Hello, Another Zustand!',
}));
