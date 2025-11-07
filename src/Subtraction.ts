import { Operation } from './Operation';

export class Subtraction extends Operation {
  execute(a: number, b: number): number {
    return a - b;
  }
}
