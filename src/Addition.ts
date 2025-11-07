import { Operation } from './Operation';

export class Addition extends Operation {
  execute(a: number, b: number): number {
    return a + b;
  }
}
