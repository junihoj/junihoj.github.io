import type { WINDOW_CONFIG } from "#constants";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import { useLayoutEffect, useRef, type ComponentType } from "react";

const WindowWrapper = <P extends object>(
  Component: ComponentType<P>,
  windowsKey: keyof typeof WINDOW_CONFIG,
) => {
  const Wrapped = (props: P) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowsKey];
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";
      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowsKey),
      });
      return () => instance.kill();
    }, []);
    useLayoutEffect(() => {
      const el = ref.current;

      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);
    return (
      <section
        id={windowsKey}
        ref={ref}
        style={{ zIndex }}
        className="absolute"
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;
  return Wrapped;
};

export default WindowWrapper;
