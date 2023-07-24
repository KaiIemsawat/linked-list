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
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const test = new SLL();
test.addFront(100);
test.addFront(200);
// test.addFront(300);
// test.addFront(400);
// test.removeFront();

test.printData();
test.getFront();
