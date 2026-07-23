const nome = "Luh Ramiro de Araújo";
const curso = "Sistemas para Internet";

console.log(`Aluna: ${nome} | ${curso}`);

const idade = 45;
const cidade = "João Pessoa";

console.log(`Idade: ${idade} | ${cidade}`);

const notas = [8.5, 7.0, 9.0];
const mediaInicial = (notas[0] + notas[1] + notas[2]) / 3;

if (mediaInicial >= 7.0) {
    console.log("Aprovada!");
} else if (mediaInicial === 0) {
    console.log("Reprovada!");
} else {
    console.log("Recuperação!");
}

function calcularMedia(listaDeNotas) {
  const soma = listaDeNotas[0] + listaDeNotas[1] + listaDeNotas [2];
  return soma / 3
}

const calcularMediaArrow = (listaDeNotas) => (listaDeNotas[0]) + (listaDeNotas[1]) + (listaDeNotas[2]) / 3;

const aluna = {
    nome: "Luh Ramiro",
    curso: "Sistemas para Internet",
    notas: [8.0, 6.5, 7.5]
};

function boletim(objetoAluna) {
  const mediaFinal = calcularMedia(objetoAluna.notas);
  
  console.log("\n=== BOLETIM ===");
  console.log(`Nome da Aluna: ${objetoAluna.nome}`);
  console.log(`Curso Cadastrado: ${objetoAluna.curso}`);
  console.log(`Média das Notas: ${mediaFinal.toFixed(1)}`);

  if (mediaFinal >= 7.0) {
      console.log("Resultado Final: Aprovada!")
  } else {
    console.log("Resultado Final: Recuperação!")
  }
}

boletim(aluna);