const carrinho = [
  { nome: "Arranhador para Gatos", preco: 180.00 },
  { nome: "Cama túnel para Gato", preco: 120.00 },
  { nome: "Caixa de Areia para Gato", preco: 70.00 }
];

function calcularTotalComFor(listaProdutos) {
    let somaTotal = 0;

    for (let i = 0; i < listaProdutos.length; i++) {
        somaTotal += listaProdutos[i].preco;
    }
    return somaTotal;
}

const calcularTotalComReduce = (listaProdutos) => {
  return listaProdutos.reduce((acumulador, produto) => acumulador + produto.preco, 0);
};

console.log("=== SEU CARRINHO DE COMPRAS ===");
console.log(carrinho);

console.log("\n=== CALCULANDO OS TOTAIS ===");

const totalFor = calcularTotalComFor(carrinho);
console.log(`Total (usando laço For): R$ ${totalFor.toFixed(2)}`);

const totalReduce = calcularTotalComReduce(carrinho);
console.log(`Total (usando método .reduce): R$ ${totalReduce.toFixed(2)}`);