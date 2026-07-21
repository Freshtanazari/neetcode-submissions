class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let result : number[] = []; 
        let product = 1;
        // count the number of zeros
        let zeroCount = 0;
        let zeroIndex = 0; 

        for(let i=0; i < nums.length; i++){
            if (nums[i]=== 0){
                zeroCount++;
            }
        }
        if(zeroCount >=2 ){
            result = new Array(nums.length).fill(0);
            return result
        }
        if(zeroCount == 1){
            zeroIndex = nums.indexOf(0);
            nums[zeroIndex] = 1   
        }
        for(let i=0; i < nums.length; i++){
            product *= nums[i]
        }
        for(let i =0; i < nums.length; i++){
            result.push(product/nums[i])
        }
        if(zeroCount){
            result = new Array(nums.length).fill(0);
            result[zeroIndex] = product
            return result
        }
        return result
    }
}
