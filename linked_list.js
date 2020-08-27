class Node {
	constructor(element)
	{
		this.element = element;
		this.next = null;
	}
}

let node1 = new Node("data1");
let node2 = new Node(2);

node1.next = node2;

console.log(node1.element) //returns data1
console.log(node1.next.element) //returns 2