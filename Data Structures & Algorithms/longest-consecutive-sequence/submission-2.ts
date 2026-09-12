class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        // note: Fast membership lookup

        let uniqueNums = new Set(nums);
        let maxSequence = 0;
        // go through each number
        for (let num of nums) {
            // if the number before it doesnt exist, then it is a new sequence
            if (!uniqueNums.has(num - 1)) {
                // start counting the sequence
                let sequenceLen = 1;
                // the next number
                let nextNum = num + 1;
                // continue adding to the length of the sequence till there exists a next number
                while (uniqueNums.has(nextNum)) {
                    sequenceLen++;
                    nextNum++;
                }
                // once the sequence end, if it's length is greater than the max lenght, assign it to the maxsequence
                if (sequenceLen > maxSequence) {
                    maxSequence = sequenceLen;
                }
            }
        }
        return maxSequence;
    }
}
