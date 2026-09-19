class MinStack {
    // store each item as an object to keep track of min 
    // for o(1) time requirement
    stackArr : {value : number;  min: number }[] = [];
    // keep record of the size to delete items from the stack
    size: number = 0

    constructor() {
    }

    /**
     * @param {number} val
     * @return {void}
     */
    

    push(val: number): void {
        // if it is the first item
        if(this.size === 0){
            this.stackArr[0] = {
                value : val, 
                min : val
            }
            this.size += 1
        }
        else{
            this.stackArr[this.size] = {
                value : val, 
                min : this.stackArr[this.size-1].min
            }
        // check if the current value is not lower than the prev min
        if (val < this.stackArr[this.size-1].min) {
            this.stackArr[this.size].min= val
        }
        this.size += 1;
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        if(this.size < 1){
            console.log("stack is empty")
        }else {
            this.size -= 1;
        }
       
    }

    /**
     * @return {number}
     */
    top(): number {
        if(this.size < 1){
            console.log("stack is empty");
        }else{
            return this.stackArr[this.size-1].value
        }
        
    }

    /**
     * @return {number}
     */
    getMin(): number {
        if(this.size < 1 ){
            console.log("stack is empty")
        }else {
            return this.stackArr[this.size-1].min
        }
        

    }
}
