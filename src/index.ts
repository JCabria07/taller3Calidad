export class Calculadora {
  // Suma
  sumar(a: number, b: number): number {
    return a + b;
  }

  // Resta
  restar(a: number, b: number): number {
    return a - b;
  }

  // Multiplicación
  multiplicar(a: number, b: number): number {
    return a * b;
  }

  // División con control de división por cero
  dividir(a: number, b: number): number {
    if (b === 0) throw new Error("No se puede dividir entre 0");
    return a / b;
  }

  // Módulo (resto de la división)
  modulo(a: number, b: number): number {
    if (b === 0) throw new Error("No se puede calcular módulo con 0");
    return a % b;
  }

  // Potencia (a elevado a b)
  potencia(base: number, exponente: number): number {
    return Math.pow(base, exponente);
  }

  // Raíz cuadrada
  raizCuadrada(numero: number): number {
    if (numero < 0) throw new Error("No se puede calcular raíz cuadrada de un número negativo");
    return Math.sqrt(numero);
  }

  // Valor absoluto
  valorAbsoluto(numero: number): number {
    return Math.abs(numero);
  }
}