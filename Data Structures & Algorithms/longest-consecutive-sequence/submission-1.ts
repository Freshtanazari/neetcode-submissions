class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        // note: Fast membership lookup

        let uniqueNums = new Set(nums);
        let maxSequence = 0;
        for (let num of nums){
            if(!uniqueNums.has(num-1)){
            let sequenceLen = 1;
            let nextNum = num+1
            while(uniqueNums.has(nextNum)){
                sequenceLen++;
                nextNum++;
            }
            if(sequenceLen > maxSequence){
                maxSequence = sequenceLen
            }
            }
        }
        return maxSequence
    }
}
