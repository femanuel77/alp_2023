n1 = Number(prompt("Digite um número inteiro:"));
n2 = Number(prompt("Digite outro número inteiro:"));
if(n1<=n2){
    while (n1<=n2){
        document.write(n1 + "<br/>");
        n1++;
    }
}
else if (n2<=n1){
    while (n2<=n1){
        document.write(n2 + "<br/>");
        n2++;
    }
}
/*else if (n2<=n1){
    while (n2<=n1){
        document.write(n1 + "<br/>");
        n1--;
    }
}*/