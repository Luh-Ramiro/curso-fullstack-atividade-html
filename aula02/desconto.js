function aplicarDesconto(preco, percentual) {
  const valorDesconto = preco * (percentual / 100);
  const precoFinal = preco - valorDesconto;
  return precoFinal;
}

const aplicarDescontoArrow = (preco, percentual) => preco - (preco * (percentual / 100));

console.log("=== TESTANDO FUNCÃO TRADICIONAL ===");
const resultado1 = aplicarDesconto(100, 10); 
console.log(`Preço original 100 com 10% de desconto: R$ ${resultado1}`);

const resultado2 = aplicarDesconto(250, 20);
console.log(`Preço original 250 com 20% de desconto: R$ ${resultado2}`);

console.log("\n=== TESTANDO ARROW FUNCTION ===");
const resultadoArrow = aplicarDescontoArrow(180, 10);
console.log(`Rastreador de R$ 180 com 10% de desconto: R$ ${resultadoArrow}`);