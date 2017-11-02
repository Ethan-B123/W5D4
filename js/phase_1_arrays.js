Array.prototype.uniq = function uniq () {
  // console.log('break');
  const arr = [];
  this.forEach(function (element) {
    if (!arr.includes(element)) {
      arr.push(element);
    }
  });
  return arr;
};

// console.log([1,2,2,4].uniq()); // [1,2,4]

Array.prototype.twoSum = function twoSum () {
  const arr = [];
  for (var i = 0; i < this.length - 1; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        arr.push([i,j]);
      }
    }
  }
  return arr;
};

// console.log([1,-2,2,4].twoSum()); // [[1,2]]

Array.prototype.transpose = function transpose () {
  const arr = [];
  for (var i = 0; i < this[0].length; i++) {
    const hold_arr = [];
    for (var j = 0; j < this.length; j++) {
      hold_arr.push(this[j][i]);
    }
    arr.push(hold_arr);
  }
  return arr;
};

// console.log([[1,2,3],[4,5,6]].transpose()); // [[1,4],[2,5],[3,6]]
