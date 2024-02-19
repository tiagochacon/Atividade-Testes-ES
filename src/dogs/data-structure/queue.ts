export type Vertex = [
    point: number,
    distance: number
]

export class Queue {
    elements: Vertex[]

    constructor() {
        this.elements = []
    }

    add(vertex: Vertex): void{
        this.elements.push(vertex);
        this.buildQueue();
    }

    pop(): Vertex{
        const vertex = this.elements.shift();
        if(vertex == undefined) return [0,0];

        this.buildQueue();
        return vertex;

    }

    buildQueue(): void{
        const len = this.elements.length;

        for(let i = Math.floor(len / 2); i >= 0; i--) {
            this.elements = this.generateMaxHeap(this.elements, len, i);
        }
    }

    generateMaxHeap(queue: Vertex[], len: number, i: number): Vertex[]{
        let bigger = i;
        const index_son_e = 2 * i + 1;
        const index_son_d = 2 * i + 2;

        if(index_son_e < len && queue[bigger][1] > queue[index_son_e][1]) {
            bigger = index_son_e;
        }

        if(index_son_d < len && queue[bigger][1] > queue[index_son_d][1]) {
            bigger = index_son_d;
        }

        if(bigger != i) {
            const temp = queue[bigger]
            queue[bigger] = queue[i]
            queue[i] = temp
            this.generateMaxHeap(queue, len, bigger);
        }

        return queue
    }

    toString() {
        return this.elements.join(" -> ");
    }

    length() {
        return this.elements.length;
    }
}