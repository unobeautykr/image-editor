import { useEffect, useRef } from "react";
import { useImageEditor } from "./ImageEditor";

export function EditorCanvas({ containerSize }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { core } = useImageEditor();

  useEffect(() => {
    core.setCanvas(canvasRef.current as HTMLCanvasElement);

    return () => {
      core.detach();
    };
  }, [core]);

  useEffect(() => {
    core.setContainerSize(containerSize);
  }, [containerSize, core]);

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
}
