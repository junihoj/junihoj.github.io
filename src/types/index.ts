export type TwindowsKey =
  | "finder"
  | "contact"
  | "resume"
  | "safari"
  | "photos"
  | "terminal"
  | "txtfile"
  | "imgfile";

export type TwindowState = {
  isOpen: boolean;
  zIndex: number;
  data: unknown;
};
