/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        // if the head is null or only head exists return null
        if (!head || !head.next) {
            return null;
        }

        // set the prev node
        let prevNode = null;
        // set the current node
        let currentNode = head;

        // while there is a next node continue
        while (currentNode) {
            // set the temp tail as the current node
            let tail = currentNode;
            // jump n times and reassign the last node as tail
            for (let i = 1; i < n; i++) {
                tail = tail.next;
            }

            // if the next elmenet for tail is null, then we have found the tail
            if (!tail.next) {
                // set the prev pointer to the next node and remove current
                if (!prevNode) {
                    // if the prevNode is still null, remove the head
                    return head.next;
                }
                prevNode.next = currentNode.next;
                return head;
            }
            //if it wasnt actually tail update prevnode and currentnode by one step
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
    }
}
