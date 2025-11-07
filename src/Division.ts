import { Operation } from './Operation';

export class Division extends Operation {
  execute(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Divisão por zero não é permitida.');
    }
    return a / b;
  }
}
