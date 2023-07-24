class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SLL {
    constructor() {
        this.head = null;
        // this.size = 0;
    }

    // Add Value to Front
    addFront(data) {
        this.head = new Node(data, this.head);
        // this.size++;
    }

    // Remove Front
    removeFront() {
        let current = this.head;
        this.head = current.next;
        // this.size--;
    }

    getFront() {
        let current = this.head;
        console.log(current.data);
    }

    // Print List Data
    printData() {
        let current = this.head;
        let result = [];
        while (current) {
            // console.log(current.data);
            result.push(current.data);
            current = current.next;
        }
        console.log(result);
    }
}

const test = new SLL();
test.addFront(76);
test.addFront(2);
test.printData();
test.addFront(11.41);
test.printData();
