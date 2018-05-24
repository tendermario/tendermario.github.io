const x = Number('y');
const y = Number.NaN;

// const isNan = number => {
//   return number !== number;
// }

// if (isNan(x) && isNan(y)) {
//   console.log('both are nan');
// } else {
//   console.log('both arent nan');
// }

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y
  } else {
    return x !== x && y !== y
  }
 }

console.log(is(0, 0));