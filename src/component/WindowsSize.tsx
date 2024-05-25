import { useLayoutEffect, useState } from "react";

const WindowSize = (): string => {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    const updateSize = (): void => {
      setSize(window.innerWidth);
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  if (1024 <= size) {
    return "l";
  } else if (768 <= size && size < 1024) {
    return "m";
  } else {
    return "s";
  }
};

export default WindowSize;
