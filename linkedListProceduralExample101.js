function createNumberList(numbers) {
    if (numbers.length === 0) {
      return null;
    }
  
    const head = { data: numbers[0], next: null };
    let current = head;
    for (let i = 1; i < numbers.length; i++) {
      current.next = { data: numbers[i], next: null };
      current = current.next;
    }
  
    return head;
  }
  
  function displayList(head) {
    let current = head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  const head = createNumberList(numbers);
  displayList(head); // Output: 1 2 3 4 5 (each number on a new line)