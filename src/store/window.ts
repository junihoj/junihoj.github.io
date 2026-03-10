import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import {create} from "zustand";
import { immer } from "zustand/middleware/immer";

type TWindowStore = {
  windows: typeof WINDOW_CONFIG;
  nextZindex: number;
  openWindow: (windowKey: keyof typeof WINDOW_CONFIG, data?: unknown) => void;
  closeWindow: (windowKey: keyof typeof WINDOW_CONFIG) => void;
  focusWindow: (windowKey: keyof typeof WINDOW_CONFIG) => void;
};
 const useWindowStore = create(immer<TWindowStore>((set)=>({
    windows:WINDOW_CONFIG,
    nextZindex:INITIAL_Z_INDEX + 1,
    openWindow: (windowKey:keyof typeof WINDOW_CONFIG, data:unknown=null)=>set((state)=>{
        const win= state.windows[windowKey];
        win.isOpen = true;
        win.zIndex = state.nextZindex;
        
        win.data =  data ?? win.data;
        state.nextZindex += 1;
    }),
    closeWindow: (windowKey:keyof typeof WINDOW_CONFIG)=>set((state)=>{
        const win= state.windows[windowKey];
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
    }),
    focusWindow: (windowKey:keyof typeof WINDOW_CONFIG)=>set((state)=>{
        const win = state.windows[windowKey];
        win.zIndex = state.nextZindex++;
      
    })
})))


export default useWindowStore;