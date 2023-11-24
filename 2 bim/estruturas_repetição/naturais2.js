let n = Number(prompt("Digite um número:"));
let soma = 0;
for (let i = 1; i <= n; i++){
    soma = soma + i;
}
let media = soma / n;

document.write(`A soma dos numeros é ${soma} e a média é ${media}`)