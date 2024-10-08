
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0) {
    return [];
  }
  matrix.forEach((subArr, index) => {
    if (index % 2 !== 0) {
      matrix[index] = subArr.reverse();
    }
  });
  return matrix.flat();
}
