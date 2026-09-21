class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let result : number[] = [];
        // loop through each element
        for(let i = 0; i < temperatures.length; i++){
            // get the current element and its counter
            let currTemp = temperatures[i];
            let counter = 0;
            let existsWarmer = false
            // go through the rest of the loop
            for(let j = i+1; j < temperatures.length; j++){
                // if you hit an elment with less temp count
                if(currTemp >= temperatures[j]){
                    counter++;
                // if you hit the temperature greater than the current, count and stop
                }else if(currTemp < temperatures[j]){
                    counter++;
                    existsWarmer = true
                    break;
                }
            }
            // if there wasnt any other warmer element in the array, set the count 0
            if(!existsWarmer){
                counter = 0
            }
            // add the counter to the result
            result.push(counter)
        }
        return result
    }
}
