import { createId } from '@paralleldrive/cuid2';

export function generateId() {
  return createId();
}

export function firstLetters(text: string) {
  return text
    .split(' ')
    .map((word) => word[0])
    .join('');
}
