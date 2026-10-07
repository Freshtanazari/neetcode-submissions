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
        // two pointers appraoch with O(n) complexity
        // create a pointer for prevnode
        let prevNode = null;
        // another pointer for currentNode
        let currentNode = head;
        // another pointer for tail
        let tailPointer = head; 
        // if head is empty or have only one element return null
        if(!head || !head.next){
            return null
        }
        // poisition the tailpointer nth element away from head
        for(let i = 1; i < n; i++){
            tailPointer = tailPointer.next;
        }
        // handling n = length of the linkedlist, remove the head
        if(!tailPointer.next){
            return head.next;
        }
        // while the tialpointer is not the actual tail
        while(tailPointer.next){
            // move the prevNode, currentNode and tailPointer by one step
            prevNode = currentNode;
            currentNode = currentNode.next;
            tailPointer = tailPointer.next;
        }
        // once we reached the tail, remove the currentNode
        prevNode.next = currentNode.next;
        //return head
        return head;
    }
}
