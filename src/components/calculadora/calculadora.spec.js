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
});