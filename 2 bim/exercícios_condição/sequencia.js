let n = Number(prompt("Digite um número:"));
let vetor = [1];
for (i = 2; i<=n; i++){
    document.write(`${vetor} `);
    vetor.push(i);
}