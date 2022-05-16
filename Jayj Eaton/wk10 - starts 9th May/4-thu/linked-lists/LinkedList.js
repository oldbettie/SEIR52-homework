class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;

		// a Node starts with a given data property
		// a Node also has a .next property initialized as null
	}
}

class LinkedList {
	constructor(head = null) {
		this.head = head;
		this.size = 0;
		// a Linked List starts with a "head" property intialized as null
	}

	// creates a new node with the given data and adds it to back of the list
	appendNode(data) {
		let node = new Node(data);
		let current;

		if (!this.head) {
			this.head = node;
		} else {
			current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.size++;
	}

	// creates a new node with the given data and adds it to the front of the list
	prependNode(data) {
		this.head = new Node(data, this.head);
		this.size++;
	}

	// removes the last node from the list and returns it
	pop() {
		let current = this.head;
		let previous = current.next;
		let last;
		let count = 0;
		while (count < this.size) {
			count++;
			previous = current;
			current = current.next;
		}
		last = current.next;
		current.next = null;
		return last;
	}
	removeFromFront() {
		let current = this.head;
		this.head = current.next;
		this.size--;
		return current;
		// remove the head node from the list and return it
		// the next node in the list is the new head node
	}

	// insert a new node into the list with the given data
	insertAt(X, data) {
		if (X > 0 && X > this.size) {
			//add to end of list
		}
		if (X === 0) {
			this.head = new Node(data, this.head);
			return;
		}
		const node = new Node(data);
		let current, previous;

		current = this.head;
		let count = 0;
		while (count < X) {
			previous = current;
			count++;
			current = current.next;
		}
		node.next = current;
		previous.next = node;
		this.size++;

		// place it after X nodes in the list
		// if X exceeds the bounds of the list, put the node at the end
		// insertAt(0, 7) would add the new node as the head
	}
	removeAt(X) {
		if (X > 0 && X > this.size) {
			return;
		}
		let current = this.head;
		let previous;
		let count = 0;
		let deleted;

		if (X === 0) {
			this.head = current.next;
		} else {
			while (count < X) {
				count++;
				previous = current;
				current = current.next;
			}
			deleted = current;
			previous.next = current.next;
			return deleted;
		}
		this.size--;
		// remove the Xth node from the list, considering 0 to be the first node
		// return the node that has been removed
	}
	search(data) {
		let current = this.head;
		let count = 0;

		while (current) {
			if (current.data == data) {
				return count;
			}
			current = current.next;
			count++;
		}
		return false;
		// searches the list for a node with the given data
		// if it is found, return the "index" of the node, considering 0 to be the first node
		// if not, return false
	}
	sort() {
		// sort the Linked List in ascending order of data values
	}
	printListData() {
		let current = this.head;

		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}
}
// const ll = new LinkedList();
// ll.prependNode(100);
// ll.prependNode(200);
// ll.appendNode(300);

// ll.printListData();

module.exports = {
	Node,
	LinkedList,
};
