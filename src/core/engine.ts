import { CANVAS_HEIGHT, CANVAS_WIDTH, FLOOR_Y } from "../utils/constants";
import { setupKeyboard } from "./input";
import { Player } from "./player";

export const startGameLoop = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  const keys = new Set<string>();
  const player = new Player();

  if (!ctx) {
    console.error("Failed to get canvas context");
    return;
  }

  const cleanup = setupKeyboard(keys);

  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;

  function loop() {
    if (!ctx) return;

    // Background
    ctx.fillStyle = "#87ceeb";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Floor
    ctx.fillStyle = "#654321";
    ctx.fillRect(0, FLOOR_Y, canvas.width, CANVAS_HEIGHT - FLOOR_Y);

    player.update(keys);
    player.draw(ctx);

    requestAnimationFrame(loop);
  }

  loop();

  return cleanup;
};
