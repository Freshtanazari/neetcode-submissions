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
            // Check if the two numbers add up to the target.
            if (numbers[earlyPointer] + numbers[latePointer] == target) {
                // Convert the 0-indexed pointers to 1-indexed positions.
                return [earlyPointer + 1, latePointer + 1];
            }

            // If the largest number is too large for the current earlyPointer,
            // move latePointer left to find a smaller possible complement.
            // Because the array is sorted, increasing earlyPointer would only
            // increase the required complement, so the current latePointer
            // cannot be the solution for any larger earlyPointer.
            while (numbers[latePointer] > target - numbers[earlyPointer]) {
                latePointer--;
            }

            // If the latePointer value is smaller than the required complement,
            // there is no solution for the current earlyPointer, so move it right.
            if (numbers[latePointer] < target - numbers[earlyPointer]) {
                earlyPointer++;
            }
        }

        return [-1, -1];
    }
}
