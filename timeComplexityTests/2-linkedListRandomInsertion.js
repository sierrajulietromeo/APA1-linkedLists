class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertAtPosition(data, position) {
        // Ensure position is valid
        if (position < 0 || position > this.length) {
            return false;
        }

        const newNode = new Node(data);

        // Inserting at the beginning
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return true;
        }

        // Traverse to the node before insertion point
        let current = this.head;
        for (let i = 0; i < position - 1; i++) {
            current = current.next;
        }

        // Insert the new node
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return true;
    }
}

function testArrayRandomInsertion(size) {
    const start = performance.now();
    const arr = [];
    
    for (let i = 0; i < size; i++) {
        // Random position between 0 and current array length
        const randomPos = Math.floor(Math.random() * (arr.length + 1));
        arr.splice(randomPos, 0, i);
    }
    
    const end = performance.now();
    return end - start;
}

function testLinkedListRandomInsertion(size) {
    const start = performance.now();
    const linkedList = new LinkedList();
    
    for (let i = 0; i < size; i++) {
        // Random position between 0 and current list length
        const randomPos = Math.floor(Math.random() * (linkedList.length + 1));
        linkedList.insertAtPosition(i, randomPos);
    }
    
    const end = performance.now();
    return end - start;
}

function runBenchmark(size) {
    const arrayTime = testArrayRandomInsertion(size);
    const linkedListTime = testLinkedListRandomInsertion(size);

    console.log(`Inserting ${size} elements at random positions:`);
    console.log(`Array Insertion Time: ${arrayTime.toFixed(4)} ms`);
    console.log(`LinkedList Insertion Time: ${linkedListTime.toFixed(4)} ms`);
    console.log(`Difference: ${(arrayTime - linkedListTime).toFixed(4)} ms`);
}

// Run benchmarks for different sizes
runBenchmark(1000);
runBenchmark(10000);
runBenchmark(100000);
