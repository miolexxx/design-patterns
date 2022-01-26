/**
 * Calculator interface
 */
interface Calculator {
  sum(a: number, b: number): number;
  mult(a: number, b: number): number;
}

/**
 * Simple calculator class
 */
class SimpleCalculator implements Calculator {
  sum(a: number, b: number): number {
    return a + b;
  }
  mult(a: number, b: number): number {
    return a * b;
  }
}

/**
 * Calsulator with log class
 */
class LogDecorator implements Calculator {
  private calc: Calculator;

  constructor(calc: Calculator) {
    this.calc = calc;
  }

  sum(a: number, b: number): number {
    const result = this.calc.sum(a, b);
    console.log(`Log sum ${a} + ${b} = ${result}`);

    return result;
  }
  mult(a: number, b: number): number {
    const result = this.calc.mult(a, b);
    console.log(`Log mult ${a} * ${b} = ${result}`);

    return result;
  }
}

const sc = new SimpleCalculator();
sc.sum(2, 2); // just return result
const csLog = new LogDecorator(sc);
csLog.sum(3, 4); // log result
csLog.mult(3, 4); // log result
