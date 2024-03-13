import { afterAll, afterEach, beforeAll, beforeEach, describe, it } from 'vitest';

// references
//.skip - ignorar um ou um conjunto de testes
//.only - rodar apenas um ou um conjunto de testes

// hooks
// beforeAll, afterAll, beforeEach, afterEach

describe('Main', function() {
  describe('Method A', function() {
    it.skip('should happen teestinnnn', function() {
      // espera que aconteça
      // Entrada de dados / método
      // Espera retornar
    });
  });
  describe.only('Method A', function() {
    beforeAll(function() {
      console.log('beforeAll');
    });
    beforeEach(function() {
      console.log('beforeEach');
    });
    it('should happen 1', function() {
      console.log('teste1');
    });
    it('should happen 2', function() {
      console.log('teste2');
    });
    it('should happen 3', function() {
      console.log('teste3');
    });
    it('should happen 4', function() {
      console.log('teste4');
    });
    afterEach(function() {
      console.log('afterEach');
    });
    afterAll(function() {
      console.log('afterAll');
    });
  });
});