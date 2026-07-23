const titulo = document.querySelector("#titulo");
titulo.textContent = "Painel de Produtos 🛒";
titulo.style.color = "orange";

const lista = document.querySelector("#lista");
const botao = document.querySelector("#adicionar");

botao.addEventListener("click", () => {
    const item = document.createElement("li");
    const campo = document.querySelector("#nomeProduto");
    item.textContent = campo.value;
    // item.textContent = "Produto novo";
    lista.appendChild(item);
    campo.value = "";
})

const produtos = [
    { id: 1, nome: "Teclado Mecânico", preco: 320 }, 
    { id: 2, nome: "Monitor 27 polegadas", preco: 145 },
    { id: 3, nome: "Cadeira Gamer", preco: 980 }
];

produtos.forEach((p) => {
    const item = document.createElement("li");
    item.textContent = `${p.nome} - R$ ${p.preco}`
    lista.appendChild(item);
})