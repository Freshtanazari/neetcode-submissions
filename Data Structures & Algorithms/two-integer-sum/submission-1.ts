class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): any {
        for (let currIndex = 0; currIndex < nums.length; currIndex++){
            let nextIndex =  currIndex + 1;
            while(nextIndex < nums.length){
                if (target == nums[currIndex] + nums[nextIndex]){
                    return [currIndex, nextIndex]
                }
                nextIndex += 1
            }
        }
        return 
    }
}
