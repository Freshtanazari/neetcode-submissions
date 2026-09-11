class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // go through each row and check for duplicates
        for (let i = 0; i < 9; i++) {
            let seen = new Set();
            for (let j = 0; j < 9; j++) {
                if (board[i][j] == ".") {
                    continue;
                }
                if (seen.has(board[i][j])) {
                    return false;
                }
                seen.add(board[i][j]);
            }
        }
        // go through each column and check for duplicates
        for (let j = 0; j < 9; j++) {
            let seen = new Set();
            for (let i = 0; i < 9; i++) {
                if (board[i][j] == ".") {
                    continue;
                }
                if (seen.has(board[i][j])) {
                    return false;
                }
                seen.add(board[i][j]);
            }
        }

        // go through each 3x3 box
        for (let box = 0; box < 9; box++) {
            // create a set for each box
            let seen = new Set();
            // iterate 3 rows for each box
            for (let i = 0; i < 3; i++) {
                // iterate 3 cols for each box
                for (let j = 0; j < 3; j++) {
                    // use box number to get the starting position for row, then add the current iteration col within each box. 
                    let row = Math.floor(box / 3) * 3 + i;
                    // use box number to get the starting position for col, then add the current iteration col within each box. 
                    let col = (box % 3) * 3 + j;
                    if (board[row][col] == ".") {
                        continue;
                    }
                    if (seen.has(board[row][col])) {
                        return false;
                    }
                    seen.add(board[row][col]);
                }
            }
        }
        return true
    }
}
