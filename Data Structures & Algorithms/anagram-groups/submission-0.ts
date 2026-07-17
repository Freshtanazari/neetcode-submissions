class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][]{
        let dictionary: Map<string,string[]> = new Map()
        for( let word of strs){
            let key = word.split("").sort().join("");
            if (dictionary.has(key)){
                dictionary.get(key).push(word)
            }else{
                dictionary.set(key, [])
                dictionary.get(key).push(word)
            }
        }
        return Array.from(dictionary.values())
    }
}
