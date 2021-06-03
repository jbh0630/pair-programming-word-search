
const transpose = function(matrix) {
    let output = [];
    for (let i = 0; i < matrix.length; i++){
      for (let j = 0; j < matrix[i].length; j++) {
        if (output[j] === undefined) output[j] = []; 
        output[j][i] = matrix[i][j];
      }
    }
    return output;
  };

const wordSearch = (letters, word) => { 
    let result = false;

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    result = false;

    const flippedArray = transpose(letters);


    const verticalJoin = flippedArray.map(ls => ls.join(''))
    for (v of verticalJoin) {
        if (v.includes(word)) {
            return true;
        }
    }
    result = false;
    
    return result;

};


module.exports = wordSearch