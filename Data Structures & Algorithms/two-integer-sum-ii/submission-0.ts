class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        // check each element
        for (let i = 0; i < numbers.length; i++) {
            // with all the elements ahead of it once
            for (let j = i + 1; i < numbers.length; j++) {
                // if two elements equal to the target
                if (numbers[i] + numbers[j] == target) {
                    // sort them
                    let result = [numbers[i], numbers[j]].sort((a, b) => a - b);
                    return result;
                }
            }
        }
        return [-1, -1];
    }
}
