class Node {
	constructor(element)
	{
		this.element = element;
		this.next = null;
	}
}

//let node1 = new Node("data1");
//let node2 = new Node(2);

//node1.next = node2;

//console.log(node1.element) //returns data1
//console.log(node1.next.element) //returns 2
//console.log(node1.next.next) //returns null

class LinkedList {
    constructor(head = null) {
        this.head = head
        this.size = head === null ? 0 : 1; 
    }

    add(element) {
    	//Creating a new node
    	let node = new Node(element);

    	//Used to find which node to store the new node in.
    	let currentNode;

    	//If the list is empty, add the node to the head
    	if (this.head == null)
    		this.head = node;
    	else { 
    		currentNode = this.head;

    		//Finding the last node in the list
    		while (currentNode.next) {
    			currentNode = currentNode.next;
    		}
    		//Updating the new node to the end of the list
    		currentNode.next = node;
    	}
    	//Increment the size
    	this.size++;
    }
}

let node1 = new Node("data1");
let list1 = new LinkedList();
list1.add("hello");
list1.add("world");
console.log(list1);
/* return:
linkedList {
	head: node1 {
		element: "data1",
		next: null
	}	
}
*/