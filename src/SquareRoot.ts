import { Operation } from './Operation';

export class SquareRoot extends Operation {
  execute(a: number, b: number): number {
    if (a < 0) {
      throw new Error('Raiz quadrada de número negativo não é permitida.');
    }
    return Math.sqrt(a);
  }
}
