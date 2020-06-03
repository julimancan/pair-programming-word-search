const wordSearch = (letters, word) => {
    let result = undefined;
    if (letters.length === 0) {
        return true;
    } else {
        for (let row of letters) {
            let horizontalJoin = row.join('');
            if (horizontalJoin === word) {
                result = true;
                return result;
            } else {
                result = false;
            };
        };
        if (!result) {
            let transposedLetters = transpose(letters);
            for (let row of transposedLetters) {
                let verticalJoin = row.join('');
                if (verticalJoin === word) {
                    result = true;
                    return result;
                } else {
                    result = false;
                };
                return result;
            };
        }
        return result;
    }
};

const transpose = function(matrix) {
    // Put your solution here
    let matrixArray = [];
    for (let n = 0; n < matrix[0].length; n++) {
        let tempMatrixArray = [];
        for (let i = 0; i < matrix.length; i++) {
            tempMatrixArray.push(matrix[i][n]);
        }
        matrixArray.push(tempMatrixArray);
    }
    return matrixArray;
};

module.exports = wordSearch;