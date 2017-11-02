function range(start, end) {
  if (start === end) {
    return [start];
  }
  return [start].concat(range(start + 1, end));
}

// console.log(range(3, 15));

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sumRec(arr.slice(1));
}

// console.log(sumRec([1,2,3,5])); // 11

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent(base, exp - 1);
}

// console.log(exponent(3, 2));


function fibonacci(n) {
  if (n === 1) {
    return [1];
  }
  if (n === 2) {
    return [1, 1];
  }
  const a = fibonacci(n - 1);
  const arr = a;
  arr.push(a[a.length - 1] + a[a.length - 2]);
  return arr;
}

// console.log(fibonacci(10));

function subAdder(arr, el) {
  if (arr === [[]]) {
    return [[el]];
  }
  const retArr = [];
  arr.forEach((sub)=>{
    let temp = sub.slice();
    temp.push(el);
    retArr.push(temp);
  });
  return retArr;
}

function subsets(arr) {
  if (arr.length === 0) {
    return [[]];
  }
  let temp = arr.slice();
  let element = temp.pop();
  const retArr = subsets(temp);


  return retArr.concat( subAdder(retArr, element) );
}
// console.log(subsets([1,2,3]));
// console.log(subAdder([ [1,2,3], [1,5,7] ], 9)); // [1,2,3,9], [1,5,7,9]














//
