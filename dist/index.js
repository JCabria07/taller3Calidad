export class Calculadora {
    // Suma
    sumar(a, b) {
        return a + b;
    }
    // Resta
    restar(a, b) {
        return a - b;
    }
    // Multiplicación
    multiplicar(a, b) {
        return a * b;
    }
    // División con control de división por cero
    dividir(a, b) {
        if (b === 0)
            throw new Error("No se puede dividir entre 0");
        return a / b;
    }
    // Módulo (resto de la división)
    modulo(a, b) {
        if (b === 0)
            throw new Error("No se puede calcular módulo con 0");
        return a % b;
    }
    // Potencia (a elevado a b)
    potencia(base, exponente) {
        return Math.pow(base, exponente);
    }
    // Raíz cuadrada
    raizCuadrada(numero) {
        if (numero < 0)
            throw new Error("No se puede calcular raíz cuadrada de un número negativo");
        return Math.sqrt(numero);
    }
    // Valor absoluto
    valorAbsoluto(numero) {
        return Math.abs(numero);
    }
}
//# sourceMappingURL=index.js.map