import { StaticImageData } from 'next/image';

export interface IDynamicElement {
  id: number;
  alt: string;
  img: StaticImageData;
  startX: number;
  startY: number;
  endY: number;
  endX: number;
  rotate: string;
}
