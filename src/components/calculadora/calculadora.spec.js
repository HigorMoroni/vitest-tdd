import {
  //assert
  expect,
  describe,
  it,
} from 'vitest';
import { sum, sub, mult, div  } from './calculadora';

describe('Calculadora', () => {
  describe('Smoke tests', () => {
    it('should exist the method "sum"', () => {
      //assert.exists(sum);
      expect(sum).to.exist;

      //assert.isFunction(sum);
      expect(sum).to.be.a('function');
    });
    it('should exist the method "sub"', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });
    it('should exist the method "mult"', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });
    it('should exist the method "div"', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when "sum(2,2)"', () => {
      //expect(sum(2, 2)).to.be.equal(4);
      //expect(sum(2, 2)).toEqual(4);
      expect(sum(2, 2)).toBe(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when "sub(6,2)"', () => {
      expect(sub(6, 2)).toBe(4);
    });
    it('should return -4 when "sub(6,10)"', () => {
      expect(sub(6, 10)).toBe(-4);
    });
  });

  describe('Mult', () => {
    it('should return 4 when "mult(2,2)"', () => {
      expect(mult(2, 2)).toBe(4);
    });
  });

  describe('Div', () => {
    it('should return 2 when "div(4,2)"', () => {
      expect(div(4, 2)).toBe(2);
    });
    it('should return a error message when is a division by zero', () => {
      expect(div(4, 0)).toBe('Não é possível dividir por zero!');
    });
  });
});