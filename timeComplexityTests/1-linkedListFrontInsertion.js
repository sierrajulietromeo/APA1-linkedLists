class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
}

function testArrayInsertion(size) {
    const start = performance.now();
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.unshift(i);  // Expensive operation for arrays
    }
    const end = performance.now();
    return end - start;
}

function testLinkedListInsertion(size) {
    const start = performance.now();
    const linkedList = new LinkedList();
    for (let i = 0; i < size; i++) {
        linkedList.insertAtBeginning(i);  // Very cheap operation
    }
    const end = performance.now();
    return end - start;
}

function runBenchmark(size) {
    const arrayTime = testArrayInsertion(size);
    const linkedListTime = testLinkedListInsertion(size);

    console.log(`Inserting ${size} elements:`);
    console.log(`Array Insertion Time: ${arrayTime.toFixed(4)} ms`);
    console.log(`LinkedList Insertion Time: ${linkedListTime.toFixed(4)} ms`);
    console.log(`Difference: ${(arrayTime - linkedListTime).toFixed(4)} ms`);
}

// Run benchmarks for different sizes
runBenchmark(1000);
runBenchmark(10000);
runBenchmark(100000);
runBenchmark(1000000);