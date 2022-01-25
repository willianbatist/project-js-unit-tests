const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(typeof productDetails('Alcool gel','Máscara')).toEqual('object');
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool gel','Máscara').length).toEqual(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    let productDetails1 = productDetails('Alcool gel');
    let productDetails2 = productDetails('Máscara');
    expect(typeof productDetails1 || typeof productDetails2).toEqual('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    let produtos = productDetails('Alcool gel', 'Máscara');
    expect(produtos[0].name == produtos[1].name).toBe(false);
    // Teste se os dois productIds terminam com 123.
    let produtoId1 = produtos[0].details.productId;
    let produtoId2 = produtos[1].details.productId;
    expect(produtoId1.endsWith('123') && produtoId2.endsWith('123')).toBe(true);
  });
});
