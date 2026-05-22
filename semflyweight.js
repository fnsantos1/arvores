"use strict";
class arvores {
    especie;
    altura;
    nmrdegalhos;
    larguradotronco;
    cor;
    textura;
    x;
    y;
    constructor(especie, altura, nmrdegalhos, larguradotronco, cor, textura) {
        this.especie = especie;
        this.altura = altura;
        this.nmrdegalhos = nmrdegalhos;
        this.larguradotronco = larguradotronco;
        this.cor = cor;
        this.textura = textura;
        this.x = Math.random() * 100;
        this.y = Math.random() * 100;
    }
}
const antesMemoria = process.memoryUsage().heapUsed;
const floresta = [];
for (let i = 0; i < 100000; i++) {
    const arvore = new arvores("Carvalho", 10, 5, 0.5, "Verde", "Rugosa");
    floresta.push(arvore);
}
console.log(floresta);
const depoisMemoria = process.memoryUsage().heapUsed;
console.log(`Memoria utilizada: ${depoisMemoria - antesMemoria} bytes`);
