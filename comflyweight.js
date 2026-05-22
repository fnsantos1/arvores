"use strict";
class tipoArvore {
    especie;
    altura;
    nmrdegalhos;
    larguradotronco;
    cor;
    textura;
    constructor(especie, altura, nmrdegalhos, larguradotronco, cor, textura) {
        this.especie = especie;
        this.altura = altura;
        this.nmrdegalhos = nmrdegalhos;
        this.larguradotronco = larguradotronco;
        this.cor = cor;
        this.textura = textura;
    }
}
class Arvore {
    tipo;
    x;
    y;
    constructor(tipo, x, y) {
        this.tipo = tipo;
        this.x = x;
        this.y = y;
    }
}
class ArvoresFactory {
    static arvores = {};
    static getarvores(especie, altura, nmrdegalhos, larguradotronco, cor, textura) {
        const key = `${especie}-${altura}-${nmrdegalhos}-${larguradotronco}-${cor}-${textura}`;
        if (!this.arvores[key]) {
            const tipo = new tipoArvore(especie, altura, nmrdegalhos, larguradotronco, cor, textura);
            this.arvores[key] = new Arvore(tipo, Math.random() * 100, Math.random() * 100);
        }
        return this.arvores[key];
    }
}
const antes = process.memoryUsage().heapUsed;
const floresta = [];
for (let i = 0; i < 100000; i++) {
    const arvore = ArvoresFactory.getarvores("Carvalho", 10, 5, 0.5, "Verde", "Rugosa");
    floresta.push(arvore);
}
console.log(floresta);
const depois = process.memoryUsage().heapUsed;
console.log(`Memoria utilizada: ${depois - antes} bytes`);
