class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        // start
        let left = 0;
        // end
        let right = nums.length-1
        // till the pointers doesnt cross
        while(left <= right){
            // find the middle index
            let mid = Math.floor((left+right)/2);
            // if found return it
            if(target == nums[mid]){
                return mid
            }
            // if target is on the greater end, start from mid+1
            if(target > nums[mid]){
                left = mid+1
            }
            // if target is on the smaller end, end at teh mid-1
            if(target < nums[mid]){
                right = mid-1
            }
        }
        // if not found return -1
        return -1
    }
}
