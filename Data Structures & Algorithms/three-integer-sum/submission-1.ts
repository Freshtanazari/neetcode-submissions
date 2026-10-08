class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        // sort the array
        nums.sort((a, b) => a - b);

        const result = [];

        // go through each element
        for (let i = 0; i < nums.length; i++) {
            // set the pointer to the smallest next element
            let leftPointer = i+ 1;
            // set the pointer to the greatest element
            let rightPointer = nums.length -1 

            // if the triplets for this fixed element has been calculated, skip
            if (i > 0 && nums[i - 1] == nums[i]) {
                continue;
            }
            // till pointers have not met
            while (rightPointer > leftPointer) {
                // calculate the sum of three
                let sum = nums[leftPointer] + nums[rightPointer] + nums[i];
                if (sum == 0) {
                    // add the triplet and move left and right pointers by one step
                    let triplet = [nums[leftPointer], nums[rightPointer], nums[i]];
                    result.push(triplet);
                    leftPointer++;
                    rightPointer--;
                    // if the pointers are duplicate, skip
                    while (leftPointer < rightPointer && nums[leftPointer] == nums[leftPointer - 1]) {
                        leftPointer++;
                    }
                    while (leftPointer < rightPointer && nums[rightPointer] == nums[rightPointer + 1]) {
                        rightPointer--;
                    }
                // if susm is less than 0, we need a greater number
                } else if (sum < 0) {
                    leftPointer++;
                // if sum is greater than 0, we need a smaller number
                } else if (sum > 0) {
                    rightPointer--;
                }
            }
        }

        return result;
    }
}
