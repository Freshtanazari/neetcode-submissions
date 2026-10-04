class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        // Use two pointers because the array is sorted.
        // Track the smallest number.
        let earlyPointer = 0;
        // Track the largest number.
        let latePointer = numbers.length - 1;

        // Continue while the two pointers have not crossed.
        while (latePointer > earlyPointer) {
            let sum = numbers[latePointer] + numbers[earlyPointer]
            // we just got the right numbers for combo
            if(sum == target){
                return [earlyPointer + 1, latePointer +1]
            }
            // we want a less number for combo
            if(sum > target){
                latePointer--;
            }
            // we want a greater number for combo
            if(sum < target){
                earlyPointer++;
            }
        }
        return [-1, -1];
    }
}
