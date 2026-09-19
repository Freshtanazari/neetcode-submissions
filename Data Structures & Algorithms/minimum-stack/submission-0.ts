class MinStack {
    stackArr : {value : number;  min: number }[] = [];
    size: number = 0

    constructor() {
    }

    /**
     * @param {number} val
     * @return {void}
     */
    

    push(val: number): void {
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
