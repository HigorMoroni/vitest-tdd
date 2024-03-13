import calc from './calculadora';
import {
  //assert
  expect,
  describe,
  it,
} from 'vitest';

describe('Calculadora', () => {
  describe('Smoke tests', () => {
    it('should exist the calc lib', () => {
      //assert.exists(calc);
      expect(calc).to.exist;
    });

    it('should exist the method "sum"', () => {
      expect(calc.sum).to.exist;

      //assert.isFunction(calc.sum);
      expect(calc.sum).to.be.a('function');
    });
    it('should exist the method "sub"', () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });
    it('should exist the method "mult"', () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });
    it('should exist the method "div"', () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when "sum(2,2)"', () => {
      //expect(calc.sum(2, 2)).to.be.equal(4);
      //expect(calc.sum(2, 2)).toEqual(4);
      expect(calc.sum(2, 2)).toBe(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when "sub(6,2)"', () => {
      expect(calc.sub(6, 2)).toBe(4);
    });
    it('should return -4 when "sub(6,10)"', () => {
      expect(calc.sub(6, 10)).toBe(-4);
    });
  });

  describe('Mult', () => {
    it('should return 4 when "mult(2,2)"', () => {
      expect(calc.mult(2, 2)).toBe(4);
    });
  });

  describe('Div', () => {
    it('should return 2 when "div(4,2)"', () => {
      expect(calc.div(4, 2)).toBe(2);
    });
    it('should return a error message when is a division by zero', () => {
      expect(calc.div(4, 0)).toBe('Não é possível dividir por zero!');
    });
  });
});