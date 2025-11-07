import { Operation } from './Operation';

export class Power extends Operation {
  execute(a: number, b: number): number {
    return Math.pow(a, b);
  }
}
