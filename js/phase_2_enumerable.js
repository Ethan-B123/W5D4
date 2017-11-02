Array.prototype.myEach = function myEach(cb) {
  for (var i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

// [1,2,3,4,5,6,7].myEach((el) => console.log(el));


Array.prototype.myMap = function myMap(cb) {
  for (var i = 0; i < this.length; i++) {
    this[i] = cb(this[i]);
  }
};

// const t = [1,2,3,4,5,6,7];
// t.myMap((el) => el * 2);
// console.log(t);


Array.prototype.myReduce = function myReduce(cb, startingVal) {
  let acc;
  let startingIdx;

  if (startingVal === undefined){
    acc = this[0];
    startingIdx = 1;
  } else {
    acc = startingVal;
    startingIdx = 0;
  }

  for (var i = startingIdx; i < this.length; i++) {
    acc = cb(acc, this[i]);
  }
  return acc;
};

const arr = [2,2,2];

// console.log(arr.myReduce( (a,b) => a * b, 2 ));
