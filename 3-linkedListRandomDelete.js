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

    // Same deleteAtPosition method as before
    deleteAtPosition(position) {
        if (position < 0 || position >= this.length) {
            return null;
        }

        if (position === 0) {
            const deletedNode = this.head;
            this.head = this.head.next;
            this.length--;
            return deletedNode.data;
        }

        let current = this.head;
        for (let i = 0; i < position - 1; i++) {
            current = current.next;
        }

        const deletedNode = current.next;
        current.next = current.next.next;
        this.length--;

        return deletedNode.data;
    }
}

function testArrayRandomDeletion(size) {
    // Pre-create the array first
    const arr = Array.from({length: size}, (_, i) => i);
    
    const start = performance.now();
    
    for (let i = 0; i < size; i++) {
        const randomPos = Math.floor(Math.random() * arr.length);
        arr.splice(randomPos, 1);
    }
    
    const end = performance.now();
    return end - start;
}

function testLinkedListRandomDeletion(size) {
    // Create the linked list first
    const linkedList = new LinkedList();
    
    // Populate the linked list
    for (let i = 0; i < size; i++) {
        const newNode = new Node(i);
        if (!linkedList.head) {
            linkedList.head = newNode;
        } else {
            let current = linkedList.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        linkedList.length++;
    }
    
    // Start timing the deletion process
    const start = performance.now();
    
    for (let i = 0; i < size; i++) {
        const randomPos = Math.floor(Math.random() * linkedList.length);
        linkedList.deleteAtPosition(randomPos);
    }
    
    const end = performance.now();
    return end - start;
}

function runBenchmark(size) {
    const arrayTime = testArrayRandomDeletion(size);
    const linkedListTime = testLinkedListRandomDeletion(size);

    console.log(`Deleting ${size} elements from random positions:`);
    console.log(`Array Deletion Time: ${arrayTime.toFixed(4)} ms`);
    console.log(`LinkedList Deletion Time: ${linkedListTime.toFixed(4)} ms`);
    console.log(`Difference: ${(arrayTime - linkedListTime).toFixed(4)} ms`);
}

// Run benchmarks for different sizes
runBenchmark(1000);
runBenchmark(10000);
runBenchmark(100000);