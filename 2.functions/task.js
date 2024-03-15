function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }

    sum += arr[i];
  }
  let avg = (sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: Number(avg) };
}

getArrayParams(-99, 99, 10);
console.log(getArrayParams(-99, 99, 10));

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// function differenceMaxMinWorker(...arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   let min = arr[0];
//   let max = arr[0];

//   min = Math.min(...arr);
//   max = Math.max(...arr);

//   return max - min;
// }

// function differenceEvenOddWorker(...arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   let sumEvenElement = 0;
//   let sumOddElement = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sumEvenElement += arr[i];
//     } else {
//       sumOddElement += arr[i];
//     }
//   }

//   return sumEvenElement - sumOddElement;
// }

// function averageEvenElementsWorker(...arr) {
//   if (arr.length === 0) {
//     return 0;
//   }

//   let sumEvenElement = 0;
//   let evenElementLength = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sumEvenElement += arr[i];
//       evenElementLength++;
//     }
//   }

//   return sumEvenElement / evenElementLength;
// }

function summElementsWorker(...array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function differenceMaxMinWorker(...array) {
  let min = array[0];
  let max = array[0];
  min = Math.min(...array);
  max = Math.max(...array);
  return max - min;
}

function differenceEvenOddWorker(...array) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sumEvenElement += array[i];
    } else {
      sumOddElement += array[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...array) {
  if (array.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sumEvenElement += array[i];
      countEvenElement ++;
    }
  }
  return sumEvenElement / countEvenElement;
}

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5));

// function makeWork(arrOfArr, func) {
//   let maxWorkerResult = -Infinity;

//   for (let i = 0; i < arrOfArr.length; i++) {
//     const result = func(...arrOfArr[i]);

//     if (result > maxWorkerResult) {
//       maxWorkerResult = result;
//     }
//   }

//   return maxWorkerResult;
// }


function makeWork (arrOfArr, func) {

}