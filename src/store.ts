import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface TimeStore {
  type: "daily" | "weekly" | "monthly";
  changeType: (typeName: "daily" | "weekly" | "monthly") => void;
}

const useTimeStore = create<TimeStore>()(
  devtools((set) => ({
    type: "daily",
    changeType: (typeName) => {
      set(() => ({ type: typeName }));
    },
  }))
);

export default useTimeStore;
