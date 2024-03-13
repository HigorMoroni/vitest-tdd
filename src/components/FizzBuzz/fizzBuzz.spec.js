/**
 * Desafio FizzBuzz
 * 
 * Escreva uma lib que receba um numero e:
 * 
 * Se o numero for divisivel por 3, no lugar do numero escreva "Fizz'
 * Se o numero for divisivel por 5, no lugar do numero escreva 'Buzz'
 * Se o numero for divisivel por 3 e 5, no lugar do numero escreva "FizzBuzz'
 * Se não for multiplo de nada, retorna o numero
 */

import { describe, expect, it } from 'vitest';
import FizzBuzz from './fizzBuzz';

describe('FizzBuzz', () => {
  it('should return "Fizz" when multiple of 3', () => {
    expect(FizzBuzz(3)).toBe('Fizz');
    expect(FizzBuzz(6)).toBe('Fizz');
  });

  it('should return "Buzz" when multiple of 5', () => {
    expect(FizzBuzz(5)).toBe('Buzz');
    expect(FizzBuzz(10)).toBe('Buzz');
  });

  it('should return "FizzBuzz" when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).toBe('FizzBuzz');
    expect(FizzBuzz(30)).toBe('FizzBuzz');
  });

  it('should return the number when non-multiple', () => {
    expect(FizzBuzz(7)).toBe(7);
  });
});