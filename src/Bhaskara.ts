export class Bhaskara {
  private a: number;
  private b: number;
  private c: number;

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  calculateRoots(): { root1: number; root2: number } | string {
    const discriminant = this.b * this.b - 4 * this.a * this.c;
    if (discriminant < 0) {
      return 'Não há raízes reais.';
    }
    const root1 = (-this.b + Math.sqrt(discriminant)) / (2 * this.a);
    const root2 = (-this.b - Math.sqrt(discriminant)) / (2 * this.a);
    return { root1, root2 };
  }
}
