class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result : number[] = []; 
        let currIndex = 0; 
        while(currIndex < nums.length){
            let productNum = 1;
            for (let i = 0; i < nums.length; i++){
                if(currIndex == i){
                    continue; 
                }
                productNum *= nums[i]
            }
            result.push(productNum);
            currIndex++;
        }
        return result
    }
}
