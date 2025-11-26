import { Calculadora } from "../index";

let calculator: Calculadora;

beforeEach(() => {
  calculator = new Calculadora();
});

test("sumarNumerosDebeDarResultadoCorrecto", () => {
  expect(calculator.sumar(2, 3)).toBe(5);
  expect(calculator.sumar(6, 6)).toBe(12);
  expect(calculator.sumar(15, 13)).toBe(28);
  expect(calculator.sumar(1233, 1)).toBe(1234);
});

test("restarNumerosDebeDarResultadoCorrecto", () => {
  expect(calculator.restar(2, 3)).toBe(-1);
  expect(calculator.restar(6, 6)).toBe(0);
  expect(calculator.restar(15, 13)).toBe(2);
  expect(calculator.restar(1233, 1)).toBe(1232);
});

test("multiplicarNumerosDebeDarResultadoCorrecto", () => {
  expect(calculator.multiplicar(2, 3)).toBe(6);
  expect(calculator.multiplicar(6, 6)).toBe(36);
  expect(calculator.multiplicar(15, 13)).toBe(195);
  expect(calculator.multiplicar(1233, 1)).toBe(1233);
});

test("dividirNumerosDebeDarResultadoCorrecto", () => {
  expect(calculator.dividir(10, 5)).toBe(2);
  expect(calculator.dividir(50, 10)).toBe(5);
  expect(calculator.dividir(36, 2)).toBe(18);
  expect(calculator.dividir(76, 4)).toBe(19);
});

test("dividirEntreCeroDebeLanzarExcepcion", () => {
  expect(() => calculator.dividir(10, 0)).toThrow("No se puede dividir entre 0");
});

test("moduloDebeDarResultadoCorrecto", () => {
  expect(calculator.modulo(10, 3)).toBe(1);
  expect(calculator.modulo(20, 5)).toBe(0);
  expect(calculator.modulo(17, 3)).toBe(2);
});

test("moduloPorCeroDebeLanzarExcepcion", () => {
  expect(() => calculator.modulo(10, 0)).toThrow("No se puede calcular módulo con 0");
});

test("potenciaDebeDarResultadoCorrecto", () => {
  expect(calculator.potencia(2, 3)).toBeCloseTo(8.0, 4);
  expect(calculator.potencia(5, 0)).toBeCloseTo(1.0, 4);
  expect(calculator.potencia(9, 2)).toBeCloseTo(81.0, 4);
});

test("raizCuadradaDebeDarResultadoCorrecto", () => {
  expect(calculator.raizCuadrada(9)).toBeCloseTo(3.0, 4);
  expect(calculator.raizCuadrada(25)).toBeCloseTo(5.0, 4);
  expect(calculator.raizCuadrada(100)).toBeCloseTo(10.0, 4);
});

test("raizCuadradaDeNumeroNegativoDebeLanzarExcepcion", () => {
  expect(() => calculator.raizCuadrada(-9)).toThrow("No se puede calcular raíz cuadrada de un número negativo");
});

test("valorAbsolutoDebeDarResultadoCorrecto", () => {
  expect(calculator.valorAbsoluto(5)).toBe(5);
  expect(calculator.valorAbsoluto(-5)).toBe(5);
  expect(calculator.valorAbsoluto(0)).toBe(0);
});