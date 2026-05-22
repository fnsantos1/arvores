declare const process: { memoryUsage: () => { heapUsed: number } };

class tipoArvore{
    private especie: string;
    private altura: number;
    private nmrdegalhos: number;
    private larguradotronco: number;
    private cor: string;
    private textura: string;

    constructor(especie: string, altura: number, nmrdegalhos: number, larguradotronco: number, cor: string, textura: string){
        this.especie = especie;
        this.altura = altura;
        this.nmrdegalhos = nmrdegalhos;
        this.larguradotronco = larguradotronco;
        this.cor = cor;
        this.textura = textura;
    }
}
class Arvore{
    private tipo: tipoArvore;
    private x: number;
    private y: number;

    constructor(tipo: tipoArvore, x: number, y: number){
        this.tipo = tipo;
        this.x = x;
        this.y = y;
    }
}
class ArvoresFactory{
    private static arvores: { [key: string]: Arvore } = {};

    public static getarvores(especie: string, altura: number, nmrdegalhos: number, larguradotronco: number, cor: string, textura: string): Arvore {
        const key = `${especie}-${altura}-${nmrdegalhos}-${larguradotronco}-${cor}-${textura}`;
        if (!this.arvores[key]) {
            const tipo = new tipoArvore(especie, altura, nmrdegalhos, larguradotronco, cor, textura);
            this.arvores[key] = new Arvore(tipo,Math.random() * 100, Math.random() * 100);
        }
        return this.arvores[key];
    }
}
const antes = process.memoryUsage().heapUsed;
const floresta: Arvore[] = [];
for(let i = 0; i < 100000; i++){
    const arvore = ArvoresFactory.getarvores("Carvalho", 10, 5, 0.5, "Verde", "Rugosa");
    floresta.push(arvore);
}
console.log(floresta);
const depois = process.memoryUsage().heapUsed;
console.log(`Memoria utilizada: ${depois - antes} bytes`);