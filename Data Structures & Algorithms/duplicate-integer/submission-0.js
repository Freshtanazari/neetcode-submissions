class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {  
     let nonduplicate = new Set(nums)
     
     if (nonduplicate.size != nums.length){
        return true 
     }
     return false
}
}
