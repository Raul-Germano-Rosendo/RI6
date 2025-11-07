import { Operation } from './Operation';
import { Addition } from './Addition';
import { Subtraction } from './Subtraction';
import { Division } from './Division';
import { Power } from './Power';
import { SquareRoot } from './SquareRoot';
import { Bhaskara } from './Bhaskara';
import * as readline from 'readline';

export class Calculator {
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  private askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(question, resolve);
    });
  }

  async run(): Promise<void> {
    console.log('Bem-vindo à Calculadora Especial!');
    console.log('Escolha uma operação:');
    console.log('1. Adição');
    console.log('2. Subtração');
    console.log('3. Divisão');
    console.log('4. Potenciação');
    console.log('5. Raiz Quadrada');
    console.log('6. Bhaskara (raízes da equação quadrática)');

    const choice = await this.askQuestion('Digite o número da operação: ');

    switch (choice) {
      case '1':
        await this.performOperation(new Addition(), 'adição');
        break;
      case '2':
        await this.performOperation(new Subtraction(), 'subtração');
        break;
      case '3':
        await this.performOperation(new Division(), 'divisão');
        break;
      case '4':
        await this.performOperation(new Power(), 'potenciação');
        break;
      case '5':
        await this.performOperation(new SquareRoot(), 'raiz quadrada');
        break;
      case '6':
        await this.performBhaskara();
        break;
      default:
        console.log('Opção inválida.');
    }

    this.rl.close();
  }

  private async performOperation(operation: Operation, operationName: string): Promise<void> {
    const a = parseFloat(await this.askQuestion('Digite o primeiro número: '));
    const b = parseFloat(await this.askQuestion('Digite o segundo número: '));
    try {
      const result = operation.execute(a, b);
      console.log(`Resultado da ${operationName}: ${result}`);
    } catch (error) {
      console.log(`Erro: ${(error as Error).message}`);
    }
  }

  private async performBhaskara(): Promise<void> {
    const a = parseFloat(await this.askQuestion('Digite o coeficiente a: '));
    const b = parseFloat(await this.askQuestion('Digite o coeficiente b: '));
    const c = parseFloat(await this.askQuestion('Digite o coeficiente c: '));
    const bhaskara = new Bhaskara(a, b, c);
    const result = bhaskara.calculateRoots();
    if (typeof result === 'string') {
      console.log(result);
    } else {
      console.log(`Raízes: ${result.root1} e ${result.root2}`);
    }
  }
}
