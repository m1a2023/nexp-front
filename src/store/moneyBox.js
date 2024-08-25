import { create } from "zustand";

export const MoneyBoxStore = create((set) => ({
  isMoneyBox: false,
  changeMoneyBoxState: () =>
    set((state) => ({ isMoneyBox: state.isMoneyBox == true ? false : true })),
}));
