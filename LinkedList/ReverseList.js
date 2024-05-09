import { LinkedList } from "./LinkedList.js";

let list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);

// 1. Initialize three pointers. prev, current, next;
// 2. Traverse the list. For each node, temporarily store the next node, update the current node's next pointer to
// point to the prev node, and move the prev and current pointers one step forward
// 3. when the current pointer reached the end of the list(null), the prev pointer will be pointing at the new head
// of the reversed list;

const reverseList = (head) => {};

console.log({ list }, { reversed: reverseList(list.head) });
