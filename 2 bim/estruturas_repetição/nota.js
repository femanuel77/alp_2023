for (;;){
    let n = Number(prompt("Digite uma nota:"));
    if (n>=0 && n<=10){
        alert("Nota válida!");
        break;
    }
    else{
        alert("Digite uma nota válida!");
    }
}