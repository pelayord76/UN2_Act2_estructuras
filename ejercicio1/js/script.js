function separaNumeros(...parametros) {
    let devolver = [];
    for (let i = 0; i < parametros.length; i++) {
        if (typeof parametros[i] === "number") {
            devolver.push(parametros[i]);
        }
    }
    return devolver;
}

console.log(separaNumeros("Hola"));
console.log(separaNumeros("Hola", "Adiós"));
console.log(separaNumeros("Hola", "Adiós", 123));
console.log(separaNumeros("Hola", "Adiós", 123, undefined, 222222, new Date()));