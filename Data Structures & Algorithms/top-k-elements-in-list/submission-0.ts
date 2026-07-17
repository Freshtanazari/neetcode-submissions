class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // freq map 
        const freq = new Map<number, number>();

        for ( let num of nums){
            if (freq.has(num)){
                freq.set(num, freq.get(num) + 1)
            }else {
                freq.set(num, 1)
            }
        }

        const result : number[] = [];
        for( let i = 1; i <= k; i++) {
            let max = 0;
            let currentNum = 0;
            for(const [key, value] of freq){
                if(value > max && !result.includes(key)){
                    max = value
                    currentNum = key
                }
            }
            result.push(currentNum)
        }
        return result
    }
}
