import { ProgressShow } from "@/atom/showProgressBar";
import { selector } from "recoil";

export const showProgressSel = selector({
  key: "progressSelector",
  get: ({ get }) => {
    const isProgressVisible = get(ProgressShow);
    return isProgressVisible;
  },
});
