import type { WINDOW_CONFIG } from "#constants";
import useWindowStore from "#store/window";

type Props = {
  target: keyof typeof WINDOW_CONFIG;
};
const WindowControls = ({ target }: Props) => {
  const { closeWindow } = useWindowStore();
  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      <div className="minimize" />
      <div className="maximize" />
    </div>
  );
};

export default WindowControls;
