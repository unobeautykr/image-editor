import { useEffect, useState } from "react";

export function useElementSize(ref: React.RefObject<HTMLElement>) {
  const [size, setSize] = useState(null);

  useEffect(() => {
    if (!ref.current) {
      throw Error("ref must be initialized in intial render");
    }

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      const rect = entry.target.getBoundingClientRect();

      setSize((size: any) => {
        if (size && size.width === rect.width && size.height === rect.height) {
          return size;
        }

        return {
          width: rect.width,
          height: rect.height,
        };
      });
    });

    const element = ref.current;
    resizeObserver.observe(element);

    return () => {
      resizeObserver.unobserve(element);
    };
  }, [ref]);

  return size;
}
