/**
 * Created by dominik on 28/04/16.
 */

var _ = require('lodash');

module.exports.parseBoard = function (board) {

    // split the board at each new line, and use map
    // to split each row into an array of characters
};

module.exports.saveEmptyPositions = function (board) {
    // Create an array to save the positions
};


module.exports.checkRow = function (board, row, value) {

};

module.exports.checkColumn = function (board, column, value) {

};

module.exports.check3x3Square = function (board, column, row, value) {
};


module.exports.checkValue = function (board, column, row, value) {
};

module.exports.solvePuzzle = function (board, emptyPositions) {
    // Variables to track our position in the solver
    var limit = 9,
        i, row, column, value, found;
    for (i = 0; i < emptyPositions.length;) {
        row = emptyPositions[i][0];
        column = emptyPositions[i][1];
        // Try the next value
        value = board[row][column] + 1;
        // Was a valid number found?
        found = false;
        // Keep trying new values until either the limit
        // was reached or a valid value was found
        while (!found && value <= limit) {
            // If a valid value is found, mark found true,
            // set the position to the value, and move to the
            // next position
            if (this.checkValue(board, column, row, value)) {
                found = true;
                board[row][column] = value;
                i++;
            }
            // Otherwise, try the next value
            else {
                value++;
            }
        }
        // If no valid value was found and the limit was
        // reached, move back to the previous position
        if (!found) {
            board[row][column] = 0;
            i--;
        }
    }

    // A solution was found! Log it
    board.forEach(function (row) {
        console.log(row.join());
    });

    // return the solution
    return board;
};
*/