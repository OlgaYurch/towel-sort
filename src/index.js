module.exports = function towelSort(matrix) {
  if (arguments.length === 0) {
    return [];
  }
  const copyMatrix = matrix.map((subArr) => [...subArr]);
  copyMatrix.forEach((subArr, index) => {
    if (index % 2 !== 0) {
      copyMatrix[index] = subArr.reverse();
    }
  });
  return copyMatrix.flat();
};
