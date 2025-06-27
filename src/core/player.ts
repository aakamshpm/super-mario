import { FLOOR_Y, GRAVITY } from "../utils/constants";

export class Player {
  x = 50;
  y = FLOOR_Y;
  width = 40;
  height = 40;
  velX = 0;
  velY = 0;
  speed = 3;
  isOnGround = true;
  jumpPower = -10;

  update(keys: Set<string>) {
    if (keys.has("ArrowLeft")) this.velX = -this.speed;
    else if (keys.has("ArrowRight")) this.velX = this.speed;
    else this.velX = 0;

    if ((keys.has("ArrowUp") || keys.has("Space")) && this.isOnGround) {
      this.velY = this.jumpPower;
      this.isOnGround = false;
    }

    this.velY += GRAVITY;

    this.x += this.velX;
    this.y += this.velY;

    if (this.y + this.height >= FLOOR_Y) {
      this.y = FLOOR_Y - this.height;
      this.isOnGround = true;
      this.velY = 0;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
