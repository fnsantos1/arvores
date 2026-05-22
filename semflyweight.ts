
class arvores{
    private especie: string;
    private altura: number;
    private nmrdegalhos: number;
    private larguradotronco: number;
    private cor: string;
    private textura: string;
    private x: number;
    private y: number;

    constructor(especie: string, altura: number, nmrdegalhos: number, larguradotronco: number, cor: string, textura: string){
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
const floresta: arvores[] = [];
for(let i = 0; i < 100000; i++){
    const arvore = new arvores("Carvalho", 10, 5, 0.5, "Verde", "Rugosa");
    floresta.push(arvore);
}
console.log(floresta);

declare const process: { memoryUsage: () => { heapUsed: number } };
const depoisMemoria = process.memoryUsage().heapUsed;
console.log(`Memoria utilizada: ${depoisMemoria - antesMemoria} bytes`);