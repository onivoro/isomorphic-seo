import { IBullet } from "./bullet.interface";

export interface IBulletList {
    defaultIcon?: string;
    bullets: IBullet[];
}
