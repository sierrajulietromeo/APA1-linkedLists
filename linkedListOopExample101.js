
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
  
    createList(numbers) {
      if (numbers.length === 0) {
        return;
      }
  
      this.head = new Node(numbers[0]);
      let current = this.head;
      for (let i = 1; i < numbers.length; i++) {
        current.next = new Node(numbers[i]);
        current = current.next;
      }
    }
  
    displayList() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  const linkedList = new LinkedList();
  linkedList.createList(numbers);
  linkedList.displayList(); // Output: 1 2 3 4 5 (each number on a new line)
