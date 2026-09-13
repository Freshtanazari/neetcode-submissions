class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        // we define a key value structure to store the matchings of closing and opening bracket
        let closingBracket: Record<string, string> = {
            ")": "(",
            "]": "[",
            "}": "{",
        };
        // we convert our string into an array
        let bracketArray = [...s];

        // if the number of the array is not divisible by 2, it is already false
        if (bracketArray.length % 2 != 0) {
            return false;
        }
        // define the stack for opening brackets
        let openingBracket = [];
        // go through each bracket
        for (let bracket of bracketArray) {
            // if bracket is a closing one and the last stack item is its opening bracket
            if (bracket in closingBracket && openingBracket[openingBracket.length-1] == closingBracket[bracket]) {
                // remove it from the stack 
                openingBracket.pop();
            }
            // if it is a closing bracket but there is not an opening bracket for it
            else if (bracket in closingBracket) {
                return false;
            }else{
            // add the opening bracket to the stack
            openingBracket.push(bracket);
            }
        }
        if (openingBracket.length > 0) {
            return false
        }
        return true
    }
}
