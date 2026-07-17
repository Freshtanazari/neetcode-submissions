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

        const buckets: number[][] = new Array(nums.length+1 ).fill(null).map(()=>[]);

        for (const [key, value] of freq){
            buckets[value].push(key)
        }

        let highestFreq= nums.length
        const result : number[]= []; 
        for (let i = highestFreq; i >= 0; i--){
            let currentBucket = buckets[i];
            for(let j = 0; j < currentBucket.length ; j++){
                if(!(result.length >= k) ){
                    result.push(currentBucket[j])
                }
            }
        }
        return result
    }
}


