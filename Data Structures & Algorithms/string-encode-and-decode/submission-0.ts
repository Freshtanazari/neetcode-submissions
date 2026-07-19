class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = "";
        for( let word of strs){
            result += word.length +"#"+ word
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let result = [];
        for(let i = 0; i < str.length; i++){
            let wordSize =""
            let word = ""
            //read the size of the word
            while (str[i] >= "0" && str[i] <="9"){
                wordSize += str[i]
                i++
            }
            // once size is done, check if we hit #
            if(str[i] === "#"){
                //read the word
                word = str.slice(i+1, i + Number(wordSize)+ 1);
                // we set this to the last index of the word as the 
                // for loop will also increment i before starting again
                i = i + Number(wordSize) ;
            }
            // add the word to the result 
            result.push(word)
        }
        return result
  }
}
