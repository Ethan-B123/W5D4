Array.prototype.bubbleSort = function bubbleSort () {
  let change = true;
  while (change) {
    change = false;
    for (var i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        const temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        change = true;
      }
    }
  }
  return this;
};

// console.log([3,2,1].bubbleSort());

String.prototype.substrings = function substrings () {
  const arr = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j <= this.length; j++) {
      arr.push(this.slice(i, j));
    }
  }
  return arr.uniq();
};

// console.log('timmy'.substrings());
