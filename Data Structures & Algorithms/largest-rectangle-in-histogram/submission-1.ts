class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        // a stack to store the starting point and height of the rectangle
        let heightStack = [];
        // set the biggest rectangle area
        let biggestArea = 0;
        // go through each height in the heights
        for (let i = 0; i < heights.length; i++) {
            let currentHeight = heights[i];
            // set the starting point of the rectangle at i
            let startingPoint = i;
            // while there exists prev height stack and their heights are larger than the current height
            // note: this means those rectangle's should be calculated and poped
            while (
                heightStack.length > 0 &&
                heightStack[heightStack.length - 1][1] > currentHeight
            ) {
                // calculate the prev rectange units
                let width = i - heightStack[heightStack.length - 1][0];
                let area = width * heightStack[heightStack.length - 1][1];
                if (area > biggestArea) {
                    biggestArea = area;
                }
                // carry this popped bar's starting index forward. currentHeight is short
                // enough to span everywhere that taller bar reached, so when we push
                // currentHeight below, it should start from here, not from i
                startingPoint = heightStack[heightStack.length - 1][0];
                // pop the rectangle
                heightStack.pop();
            }
            // push the starting point and current height into stack
            heightStack.push([startingPoint, currentHeight]);
        }
        // for the remaining heights that extends till the end, check if they
        // contain an area bigger than the one choosen now
        for (let i = 0; i < heightStack.length; i++) {
            let area = (heights.length - heightStack[i][0]) * heightStack[i][1];
            if (area > biggestArea) {
                biggestArea = area;
            }
        }
        return biggestArea;
    }
}
