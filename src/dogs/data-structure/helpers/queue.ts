// Define o tipo de vértice que será armazenado na fila
export type Vertex = [
    point: number,
    distance: number
]

// Classe que representa uma fila
export class Queue {
    elements: Vertex[]

    // Construtor que inicializa a fila vazia
    constructor() {
        this.elements = []
    }

    // Método para adicionar um vértice à fila e reconstruir a fila
    add(vertex: Vertex): void{
        this.elements.push(vertex);
        this.buildQueue();
    }

    // Método para remover o vértice de maior prioridade da fila e reconstruir a fila
    pop(): Vertex{
        const vertex = this.elements.shift();
        if(vertex == undefined) return [0,0];

        this.buildQueue();
        return vertex;

    }

    // Método para construir a fila de prioridade a partir do array de elementos
    buildQueue(): void{
        const len = this.elements.length;

        // Começa do meio do array e vai até o início, gerando um heap máximo
        for(let i = Math.floor(len / 2); i >= 0; i--) {
            this.elements = this.generateMaxHeap(this.elements, len, i);
        }
    }

    // Método para gerar um heap máximo a partir de um array
    // o valor de cada nó é maior ou igual aos valores de seus filhos.
    generateMaxHeap(queue: Vertex[], len: number, i: number): Vertex[]{
        let bigger = i;
        const index_son_e = 2 * i + 1;
        const index_son_d = 2 * i + 2;

        // Se o filho esquerdo é maior que o pai, atualiza o maior
        if(index_son_e < len && queue[bigger][1] > queue[index_son_e][1]) {
            bigger = index_son_e;
        }

        // Se o filho direito é maior que o maior atual, atualiza o maior
        if(index_son_d < len && queue[bigger][1] > queue[index_son_d][1]) {
            bigger = index_son_d;
        }

        // Se o maior não é o pai, troca o maior com o pai e continua a gerar o heap
        if(bigger != i) {
            const temp = queue[bigger]
            queue[bigger] = queue[i]
            queue[i] = temp
            this.generateMaxHeap(queue, len, bigger);
        }

        return queue
    }

    // Método para converter a fila em uma string
    toString() {
        return this.elements.join(" -> ");
    }

    // Método para obter o tamanho da fila
    length() {
        return this.elements.length;
    }
}