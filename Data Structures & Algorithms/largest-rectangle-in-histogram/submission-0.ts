class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        // get the highest height
        let highestBar = Math.max(...heights);
        // set it as the biggest rectangle for now
        let biggestRectangle: number = highestBar;
        // to count the number of units in a rectangle
        let biggestRectangleCounter = 0;
        let rowCounter = 1;

        // Approach: Brute force
        // Time: O(n × H)
        // Worst case: O(n²), when H = O(n)
        // Space: O(1) extra space
        // Tradeoff: Simple idea, but potentially much slower for large heights.

        // go through each row
        for (let i = 0; i < highestBar; i++) {
            // go through each element of heights
            for (let j = 0; j < heights.length; j++) {
                // if heights are greater than 0
                if (heights[j] > 0) {
                    // decrease it 
                    heights[j] = heights[j] - 1;
                    //count the row along with the units of lower rows
                    biggestRectangleCounter += rowCounter;
                    // if heights are 0
                } else if (heights[j] === 0) {
                    // break the rectangle and check its value
                    if (biggestRectangleCounter > biggestRectangle) {
                        biggestRectangle = biggestRectangleCounter;
                    }
                    biggestRectangleCounter = 0;
                }
            }
            // at the end of each row, check the rectangle value and break it
            if (biggestRectangleCounter > biggestRectangle) {
                biggestRectangle = biggestRectangleCounter;
            }
            biggestRectangleCounter = 0;
            rowCounter++;
        }
        // return the biggest rectangle
        return biggestRectangle;
    }
}
