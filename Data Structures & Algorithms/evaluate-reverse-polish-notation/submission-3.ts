class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        // create a stack for numbers
        let stack: number[] = [];
        // map each operand to its function 
        let operands = {
            "+" : (a:number ,b:number)=> a+b,
            "-": (a:number, b:number)=> a-b,
            "/": (a:number, b: number)=> a/b, 
            "*": (a: number, b: number)=> a*b
        }
        // go through the tokens
        for(let token of tokens){
            // if the token is a number add it to the stack
            if (!isNaN(Number(token))){
                stack.push(Number(token));
            }else{
                // if it is the operand apply it to the last two elements in the stack
                if(operands[token]){
                    let right = stack.pop()
                    let left = stack.pop()
                    // add the result back to the stack
                    let result = Math.trunc(operands[token](left, right));
                    stack.push(result)
                }else {
                    console.log("not a valid item")
                }
            }
        }
        // return the last elment of the stack
        let result: number = stack.pop()
        return result 
    }
}
