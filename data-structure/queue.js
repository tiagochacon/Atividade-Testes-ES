class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    // Adiciona um elemento ao final da fila
    enqueue(value) {
        let newNode = new Node(value);

        if (this.back) {
            this.back.next = newNode;
            this.back = newNode;
        } else {
            this.front = this.back = newNode;
        }
    }

    // Remove um elemento do início da fila
    dequeue() {
        if (this.front) {
            let removedNode = this.front;
            this.front = this.front.next;

            if (!this.front) {
                this.back = null;
            }

            return removedNode.value;
        } else {
            return null;
        }
    }

    // Retorna o primeiro elemento da fila
    peek() {
        return this.front ? this.front.value : null;
    }

    // Verifica se a fila está vazia
    isEmpty() {
        return !this.front;
    }
}

let queue = new Queue();

console.log(queue.dequeue()); // null

queue.enqueue("Element 1");
queue.enqueue("Element 2");
queue.enqueue("Element 3");

console.log(queue.peek()); // "Element 1"

console.log(queue.dequeue()); // "Element 1"

console.log(queue.peek()); // "Element 2"