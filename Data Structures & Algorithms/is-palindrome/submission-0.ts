class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // clean the text from any characters excpet for numbers and alphabets
        let text = s.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
        // set a pointer to the start
        let firstPointer = 0
        // set a pointer to the last
        let lastPointer = text.length -1

        // while the last pointer is greater than the first
        while(lastPointer > firstPointer){
            // compare and if false return
            if(text[lastPointer] !== text[firstPointer]){
                return false
            }
            // if not update the pointers
            firstPointer++;
            lastPointer--;
        }
        // pointers had the same values return true
        return true;
    }
}
