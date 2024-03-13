import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it
} from 'vitest';

// references
//.skip - ignorar um ou um conjunto de testes
//.only - rodar apenas um ou um conjunto de testes

// hooks
// beforeAll, afterAll, beforeEach, afterEach

describe('Main', function() {
  describe('Method A', function() {
    it.skip('should this when there', function() {
      // espera que aconteça
      // Entrada de dados / método
      // Espera retornar
    });
  });
  describe.only('Method A', function() {
    let arr;

    beforeAll(function() {
      console.log('beforeAll');
    });
    beforeEach(function() {
      arr = [1, 2, 3];
    });

    // Smoke Test (testa se a função existe, tipo de dados, etc)
    it('should be an array', function() {
      expect(arr).to.be.an('array');
    });
    it('should have a size of 4 when push another value to the array', function() {
      arr.push(4);
      //expect(arr).to.have.lengthOf(4);
      //expect(arr).have.lengthOf(4);
      expect(arr).toHaveLength(4);
    });
    it('should remove the value 3 when use pop in the array', function() {
      arr.pop();
      //expect(arr).to.not.include(3);
      //expect(arr).not.include(3);
      expect(arr).not.toContain(3);
    });
    it('should have a size of 2 when pop a value from the array', function() {
      arr.pop();
      expect(arr).toHaveLength(2);
    });
    it('should return true when pop 3 from the array', function() {
      //expect(arr.pop() === 3).to.be.true;
      expect(arr.pop() === 3).toBe(true);
    });

    afterEach(function() {
      console.log('afterEach');
    });
    afterAll(function() {
      console.log('afterAll');
    });
  });
});