class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    // Adiciona um elemento ao topo da pilha
    push(value) {
        let newNode = new Node(value);
        if (this.top) {
            newNode.next = this.top;
        }
        this.top = newNode;
    }

    // Remove um elemento do topo da pilha
    pop() {
        if (this.top) {
            let removedNode = this.top;
            this.top = this.top.next;
            return removedNode.value;
        } else {
            return null;
        }
    }

    // Retorna o elemento do topo da pilha
    peek() {
        return this.top ? this.top.value : null;
    }

    // Verifica se a pilha está vazia
    isEmpty() {
        return !this.top;
    }
}

let stack = new Stack();

console.log(stack.pop()); // null

stack.push("Element 1");
stack.push("Element 2");
stack.push("Element 3");

console.log(stack.peek()); // "Element 3"

console.log(stack.pop()); // "Element 3"

console.log(stack.peek()); // "Element 2"