function calcularMedia(listaDeNotas) {
    return (listaDeNotas[0] + listaDeNotas[1] + listaDeNotas[2] / 3);
}

function boletim(objetoAluno) {
    const mediaFinal = calcularMedia(objetoAluno.notas);

    console.log(`-----------------------------`);
    console.log(`Aluno(o): ${objetoAluno.nome}`);
    console.log(`Curso: ${objetoAluno.curso}`);
    console.log(`Média: ${mediaFinal.toFixed(1)}`);

    if (mediaFinal >= 7.0) {
        console.log(`Aprovado!`);
    } else {
        console.log(`Recuperação`);
    }

}

const turma = [
    {
        nome: "Luh Ramiro",
        curso: "Sistemas para Internet",
        notas: [8.5, 7.0, 9.0]
    },
    {
        nome: "Lanusse Helena",
        curso: "Sistemas para Internet",
        notas: [6.5, 5.5, 4.0]
    },
    {
        nome: "João Ramiro",
        curso: "Sistemas para Internet",
        notas: [9.0, 9.9, 10.0]
    }
];

console.log("=== PROCESSANDO BOLETIM DA TURMA ===");

turma.forEach(aluno => boletim(aluno));

console.log(`-----------------------------`);