class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode | null {
        // if there is only one or no values, return as is
        if(!head || !head.next){
            return head
        }

        // start with head becoming the previous node
        let prevNode = head;
        // let the head.next become the current node
        let currentNode = head.next;
        // save the next node, since we will reassign currentNode.next and might lose the reference
        let nextStartNode = currentNode.next;
        // continue while there exists another node to be reversed
        while(nextStartNode){
            // let the current node point to the previous node
            currentNode.next = prevNode;
            // once reversed the current node should become our previous node
            prevNode = currentNode;
            // let the next iteration start with the next node to be reversed
            currentNode = nextStartNode;
            // save the new current.next before we reassign it in the next iteration
            nextStartNode = currentNode.next
        }
        // there is no next node, so this last node should point to previous node
        currentNode.next = prevNode
        // the head should point to null to become the tail
        head.next = null;
        // return the currentNode as it is the new head
        return currentNode
    }
}