import ExclamationIMG from '@/public/images/exclamation-mark.png';
import QuestionIMG from '@/public/images/question-mark.png';
import type { IDynamicElement } from '@/types/DynamicElement';

export const dynamicImages: IDynamicElement[] = [
  {
    id: 0,
    alt: 'Exclamation Mark',
    img: ExclamationIMG,
    startX: 42,
    startY: 128,
    endX: 0,
    endY: 0,
    rotate: '-rotate-35',
  },
  {
    id: 1,
    alt: 'Question Mark',
    img: QuestionIMG,
    startX: 99,
    startY: 46,
    endX: 0,
    endY: 0,
    rotate: '-rotate-35',
  },
  {
    id: 2,
    alt: 'Exclamation Mark',
    img: ExclamationIMG,
    startX: 55,
    startY: -146,
    endX: 133,
    endY: -200,
    rotate: 'rotate-28',
  },
  {
    id: 3,
    alt: 'Question Mark',
    img: QuestionIMG,
    startX: 0,
    startY: -244,
    endX: 26,
    endY: -350,
    rotate: 'rotate-28',
  },
];
