import type { IDailyTask } from '@/types/DailyTask';

export const dailyTasks: IDailyTask[] = [
  {
    id: 0,
    title: 'Translate the sentence',
    description: 'Translate: "She has a keen mind and thinks on her feet."',
    enabled: false,
  },
  {
    id: 1,
    title: 'Word of the day',
    description:
      'Define the word "resilient", write a sentence with it, and try to use it in a conversation today.',
    enabled: false,
  },
  {
    id: 2,
    title: 'Fill in the blank',
    description: 'Complete the sentence: "I’ll call you as soon as I ___ home."',
    enabled: false,
  },
  {
    id: 3,
    title: 'Daily idiom',
    description:
      'What does the idiom "break the ice" mean? Write your explanation and use it in a sentence.',
    enabled: false,
  },
  {
    id: 4,
    title: 'Pronunciation practice',
    description:
      'Record yourself saying: "The quick brown fox jumps over the lazy dog." Focus on clarity.',
    enabled: false,
  },
];
