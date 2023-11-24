let soma = 0;
for(let i = 0; i < 5; i++){
    let n = Number(prompt(`Digite o ${i + 1}º número:`));
    soma = soma + n;
}
alert(`A soma é ${soma}!`);