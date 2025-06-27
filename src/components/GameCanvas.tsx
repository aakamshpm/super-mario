import { useEffect, useRef } from "react";
import { startGameLoop } from "../core/engine";

const GameCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const cleanup = startGameLoop(canvas as HTMLCanvasElement);

    return cleanup;
  }, []);
  return <canvas ref={canvasRef} className="rounded-xl border border-white" />;
};

export default GameCanvas;
